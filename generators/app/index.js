var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_hasAuth: false,
	_generateAuth: function() {
		this.fs.copyTpl(
			this.templatePath('assets/services/auth.service.js'),
			this.destinationPath('assets/services/auth.service.js')
		);

		this.fs.copyTpl(
			this.templatePath('assets/services/session.service.js'),
			this.destinationPath('assets/services/session.service.js')
		);

		this.fs.copyTpl(
			this.templatePath('assets/models/user.model.js'),
			this.destinationPath('assets/models/user.model.js')
		);
	},

	prompting: function () {
		var done = this.async();
		var prompts = [{
			type    : 'confirm',
			name    : 'hasAuth',
			message : 'Should we generate an auth service and user models?',
			default : false
		}];

		this.prompt(prompts, function (answers) {
			if ( answers.hasAuth ) {
				this._hasAuth = true;
			}
			done();
		}.bind(this));

	},

	writing: {
		root: function() {
			this.fs.copyTpl(
				this.templatePath('gitignore'),
				this.destinationPath('.gitignore')
			);

			this.fs.copyTpl(
				this.templatePath('karma.conf.js'),
				this.destinationPath('karma.conf.js')
			);
		},

		assets: function() {

			if ( this._hasAuth ) {
				this._generateAuth();
			}

			this.fs.copyTpl(
				this.templatePath('assets/app.js'),
				this.destinationPath('assets/app.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/constants.js'),
				this.destinationPath('assets/constants.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/index.html'),
				this.destinationPath('assets/index.html')
			);

			this.fs.copyTpl(
				this.templatePath('assets/layout.style.sass'),
				this.destinationPath('assets/layout.style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/mixins.style.sass'),
				this.destinationPath('assets/mixins.style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/routes.js'),
				this.destinationPath('assets/routes.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/style.sass'),
				this.destinationPath('assets/style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/variables.style.sass'),
				this.destinationPath('assets/variables.style.sass')
			);
		},

		gulp: function() {
			this.fs.copyTpl(
		      this.templatePath('gulpfile.js'),
		      this.destinationPath('gulpfile.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/build.task.js'),
		      this.destinationPath('gulp_tasks/build.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/clean.task.js'),
		      this.destinationPath('gulp_tasks/clean.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/config.js'),
		      this.destinationPath('gulp_tasks/config.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/css.task.js'),
		      this.destinationPath('gulp_tasks/css.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/fonts.task.js'),
		      this.destinationPath('gulp_tasks/fonts.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/html.task.js'),
		      this.destinationPath('gulp_tasks/html.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/images.task.js'),
		      this.destinationPath('gulp_tasks/images.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/javascript.task.js'),
		      this.destinationPath('gulp_tasks/javascript.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/push.task.js'),
		      this.destinationPath('gulp_tasks/push.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/secrets.js'),
		      this.destinationPath('gulp_tasks/secrets.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/serve.task.js'),
		      this.destinationPath('gulp_tasks/serve.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/spec.task.js'),
		      this.destinationPath('gulp_tasks/spec.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/vendor.task.js'),
		      this.destinationPath('gulp_tasks/vendor.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('gulp_tasks/watch.task.js'),
		      this.destinationPath('gulp_tasks/watch.task.js')
		    );
		},
		collections: function() {
			this.fs.copyTpl(
		      this.templatePath('assets/collections/base.collection.js'),
		      this.destinationPath('assets/collections/base.collection.js')
		    );
		},
		components: function() {
			this.mkdir('assets/components');
		},
		fonts: function() {
			this.mkdir('assets/fonts');
		},
		images: function() {
			this.mkdir('assets/images');
		},
		pages: function() {
			this.fs.copyTpl(
		      this.templatePath('assets/pages/dashboard.controller.js'),
		      this.destinationPath('assets/pages/dashboard.controller.js')
		    );
		    this.fs.copyTpl(
		      this.templatePath('assets/pages/dashboard.style.sass'),
		      this.destinationPath('assets/pages/dashboard.style.sass')
		    );
		    this.fs.copyTpl(
		      this.templatePath('assets/pages/dashboard.template.html'),
		      this.destinationPath('assets/pages/dashboard.template.html')
		    );
		},
		services: function() {
			if ( !this._hasAuth ) {
				this.mkdir('assets/services');
			}
		},
		models: function() {
			this.fs.copyTpl(
		      this.templatePath('assets/models/base.model.js'),
		      this.destinationPath('assets/models/base.model.js')
		    );
		},
		vendor: function() {
			this.mkdir('assets/vendor');
		}
	},

	install: {
		npm: function() {
			this.npmInstall([
				"aws-sdk",
				"del",
				"gulp",
				"gulp-awspublish",
				"gulp-concat",
				"gulp-connect",
				"gulp-flatten",
				"gulp-jasmine",
				"gulp-livereload",
				"gulp-load-plugins",
				"gulp-ng-annotate",
				"gulp-rename",
				"gulp-sass",
				"jasmine-core",
				"jshint",
				"jshint-stylish",
				"karma",
				"karma-jasmine",
				"karma-phantomjs-launcher",
				"mime",
				"path",
				"phantomjs",
				"progress",
				"q",
				"run-sequence",
				"through2"
			], { 'saveDev': true });
		},
		bower: function() {
			this.bowerInstall([
				"angular-route",
				"underscore",
				"bootstrap",
				"angular",
				"angular-mocks",
				"angular-resource",
				"angular-messages",
				"angular-bootstrap",
				"angular-websocket"
			], { 'save': true });
		}
	}
});
