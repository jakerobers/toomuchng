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
			message : 'Page name',
			default : 'untitledPage'
		}];

		this.prompt(prompts, function (answers) {
			this._entityName = this._entityNameFilter(answers.entityName) + "Page";
			this._fileName = answers.entityName.toLowerCase();
			done();
		}.bind(this));

	},
	writing: function() {
		this.fs.copyTpl(
	      this.templatePath('entity.js'),
	      this.destinationPath('assets/pages/'+ this._fileName +'/'+ this._fileName +'.controller.js'),
	      { entity: this._entityName }
	    );

	    this.fs.copyTpl(
	      this.templatePath('entity.html'),
	      this.destinationPath('assets/pages/'+ this._fileName +'/'+ this._fileName +'.template.html'),
	      { entity: this._entityName }
	    );

	    this.fs.copyTpl(
	      this.templatePath('entity.sass'),
	      this.destinationPath('assets/pages/'+ this._fileName +'/'+ this._fileName +'.style.sass'),
	      { entity: this._entityName }
	    );
	}
});
