var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	entityName: null,

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Service name',
			default : 'untitledService'
		}];

		this.prompt(prompts, function (answers) {
			this.entityName = answers.entityName;
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/services/'+ this.entityName +'.service.js'),
	      { entity: this.entityName }
	    );
	}
});
