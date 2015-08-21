var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
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
			this.fs.copyTpl(
				this.templatePath('app.js'),
				this.destinationPath('assets/app.js')
			);

			this.fs.copyTpl(
				this.templatePath('constants.js'),
				this.destinationPath('assets/constants.js')
			);

			this.fs.copyTpl(
				this.templatePath('index.html'),
				this.destinationPath('assets/index.html')
			);

			this.fs.copyTpl(
				this.templatePath('layout.style.sass'),
				this.destinationPath('assets/layout.style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('mixins.style.sass'),
				this.destinationPath('assets/mixins.style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('routes.js'),
				this.destinationPath('assets/routes.js')
			);

			this.fs.copyTpl(
				this.templatePath('style.sass'),
				this.destinationPath('assets/style.sass')
			);

			this.fs.copyTpl(
				this.templatePath('variables.style.sass'),
				this.destinationPath('assets/variables.style.sass')
			);
		},

		gulp: function() {
			this.fs.copyTpl(
		      this.templatePath('gulpfile.js'),
		      this.destinationPath('gulpfile.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('build.task.js'),
		      this.destinationPath('gulp_tasks/build.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('clean.task.js'),
		      this.destinationPath('gulp_tasks/clean.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('config.js'),
		      this.destinationPath('gulp_tasks/config.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('css.task.js'),
		      this.destinationPath('gulp_tasks/css.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('fonts.task.js'),
		      this.destinationPath('gulp_tasks/fonts.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('html.task.js'),
		      this.destinationPath('gulp_tasks/html.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('images.task.js'),
		      this.destinationPath('gulp_tasks/images.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('javascript.task.js'),
		      this.destinationPath('gulp_tasks/javascript.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('push.task.js'),
		      this.destinationPath('gulp_tasks/push.tasks.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('secrets.js'),
		      this.destinationPath('gulp_tasks/secrets.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('serve.task.js'),
		      this.destinationPath('gulp_tasks/serve.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('spec.task.js'),
		      this.destinationPath('gulp_tasks/spec.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('vendor.task.js'),
		      this.destinationPath('gulp_tasks/vendor.task.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('watch.task.js'),
		      this.destinationPath('gulp_tasks/watch.task.js')
		    );
		},
		collection: function() {
			this.fs.copyTpl(
		      this.templatePath('base.collection.js'),
		      this.destinationPath('assets/collections/base.collection.js')
		    );
		},
		fonts: function() {
			this.mkdir('assets/fonts');
		},
		images: function() {
			this.mkdir('assets/images');
		},
		model: function() {
			this.fs.copyTpl(
		      this.templatePath('base.model.js'),
		      this.destinationPath('assets/models/base.model.js')
		    );
		},
		services: function() {
			this.fs.copyTpl(
		      this.templatePath('auth.service.js'),
		      this.destinationPath('assets/services/auth.service.js')
		    );

		    this.fs.copyTpl(
		      this.templatePath('session.service.js'),
		      this.destinationPath('assets/services/session.service.js')
		    );
		},
		vendor: function() {
			this.mkdir('assets/vendor');
		}
	},

	install: {
		npm: function() {
			this.npmInstall(["aws-sdk",
				"del",
				"gulp",
				"gulp-awspublish",
				"gulp-concat",
				"gulp-connect",
				"gulp-flatten",
				"gulp-jasmine",
				"gulp-jshint",
				"gulp-jslint",
				"gulp-livereload",
				"gulp-load-plugins",
				"gulp-ng-annotate",
				"gulp-rename",
				"gulp-sass",
				"jasmine-core",
				"jshint-stylish",
				"karma",
				"karma-chrome-launcher",
				"karma-jasmine",
				"karma-phantomjs-launcher",
				"mime",
				"path",
				"phantomjs",
				"progress",
				"q",
				"run-sequence",
				"through2"],
			{ 'saveDev': true });
		},
		bower: function() {
			this.bowerInstall(["angular-route",
				"underscore",
				"bootstrap",
				"angular",
				"angular-mocks",
				"angular-resource",
				"angular-messages",
				"angular-websocket"],
			{ 'save': true });
		}
	}
});
