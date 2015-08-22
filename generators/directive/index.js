var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_entityName: null,
	_fileName: null,
	_entityNameFilter: function(entity) {
		var result = entity.split(' ')[0];
	    return result.charAt(0).toUpperCase() + result.slice(1);
	},

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Directive name',
			default : 'untitledDirective'
		}];

		this.prompt(prompts, function (answers) {
			this._entityName = this._entityNameFilter(answers.entityName) + "Directive";
			this._fileName = answers.entityName.toLowerCase();
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/directives/'+ this._fileName +'.directive.js'),
	      { entity: this._entityName }
	    );
	}
});
