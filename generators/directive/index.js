var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	entityName: null,

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Directive name',
			default : 'untitledDirective'
		}];

		this.prompt(prompts, function (answers) {
			this.entityName = answers.entityName;
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/directives/'+ this.entityName +'.directive.js'),
	      { entity: this.entityName }
	    );
	}
});
