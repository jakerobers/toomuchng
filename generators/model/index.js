var generators = require('yeoman-generator'),
	pluralize = require('pluralize');

module.exports = generators.Base.extend({
	_entityName: null,
	_fileName: null,
	_endpoint: null,
	_entityNameFilter: function(entity) {
		var result = entity.split(' ')[0];
	    return result.charAt(0).toUpperCase() + result.slice(1);
	},
	_fileNameFilter: function(filename) {
		var result = filename.split(' ')[0];
		return result.charAt(0).toLowerCase() + result.slice(1);
	},
	_endpointNameFilter: function(entityName) {
		return pluralize(entityName).toLowerCase();
	},

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'input',
			name    : 'entityName',
			message : 'Model name',
			default : 'untitledModel'
		}];

		this.prompt(prompts, function (answers) {
			this._entityName = this._entityNameFilter(answers.entityName);
			this._fileName = this._fileNameFilter(answers.entityName);
			this._endpoint = this._endpointNameFilter(answers.entityName);
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/models/'+ this._fileName +'.model.js'),
	      { entity: this._entityName, endpoint: this._endpoint }
	    );
	}
});
