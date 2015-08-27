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
			message : 'Service name',
			default : 'untitledService'
		}];

		this.prompt(prompts, function (answers) {
			this._entityName = this._entityNameFilter(answers.entityName) + "Service";
			this._fileName = this._fileNameFilter(answers.entityName);
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/services/'+ this._fileName +'.service.js'),
	      { entity: this._entityName }
	    );
	}
});
