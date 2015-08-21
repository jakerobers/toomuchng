var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	entityName: null,

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Model name',
			default : 'untitledModel'
		}];

		this.prompt(prompts, function (answers) {
			this.entityName = answers.entityName;
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/models/'+ this.entityName +'.model.js'),
	      { entity: this.entityName }
	    );
	}
});
