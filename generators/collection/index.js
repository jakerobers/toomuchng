var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	collectionName: null,
	modelName: null,

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
			this.collectionName = answers.collectionName;
			this.modelName = answers.modelName;
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/collections/'+ this.collectionName +'.collection.js'),
	      { collection: this.collectionName, model: this.modelName }
	    );
	}
});
