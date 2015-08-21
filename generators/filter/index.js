var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	entityName: null,

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Filter name',
			default : 'untitledFilter'
		}];

		this.prompt(prompts, function (answers) {
			this.entityName = answers.entityName;
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/filters/'+ this.entityName +'.filter.js'),
	      { entity: this.entityName }
	    );
	}
});
