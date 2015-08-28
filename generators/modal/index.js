var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_entityName: null,
	_fileName: null,
	_entityNameFilter: function(entity) {
		var result = entity.split(' ')[0];
	    return result.charAt(0).toUpperCase() + result.slice(1);
	},
	_fileNameFilter: function(filename) {
		var result = filename.split(' ')[0];
		return result.charAt(0).toLowerCase() + result.slice(1);
	},

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Modal name',
			default : 'untitledModal'
		}];

		this.prompt(prompts, function (answers) {
			this._entityName = this._entityNameFilter(answers.entityName) + "Modal";
			this._fileName = this._fileNameFilter(answers.entityName) + "Modal";
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.controller.js'),
	      this.destinationPath('assets/modals/'+ this._fileName +'.controller.js'),
	      { entity: this._entityName }
	    );

	    this.fs.copyTpl(
	      this.templatePath('entity.style.sass'),
	      this.destinationPath('assets/modals/'+ this._fileName +'.style.sass'),
	      { entity: this._entityName }
	    );

	    this.fs.copyTpl(
	      this.templatePath('entity.template.html'),
	      this.destinationPath('assets/modals/'+ this._fileName +'.template.html'),
	      { entity: this._entityName }
	    );
	}
});
