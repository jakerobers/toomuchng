var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_collectionName: null,
	_modelName: null,
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
			name    : 'collectionName',
			message : 'Collection name',
			default : 'untitledCollection'
		}, {
			type    : 'input',
			name    : 'modelName',
			message : 'Model of collection',
			default : 'untitledModel'
		}];

		this.prompt(prompts, function (answers) {
			this._collectionName = this._entityNameFilter(answers.collectionName) + "Collection";
			this._fileName = this._fileNameFilter(answers.collectionName);
			this._modelName = this._entityNameFilter(answers.modelName) + "Model";
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/collections/'+ this._fileName +'.collection.js'),
	      { collection: this._collectionName, model: this._modelName }
	    );
	}
});
