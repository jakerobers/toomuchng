var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_hasAuth: false,

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
				this.templatePath('assets/web/app.js'),
				this.destinationPath('assets/web/app.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/app.js'),
				this.destinationPath('assets/mobile/app.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/constants.js'),
				this.destinationPath('assets/web/constants.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/constants.js'),
				this.destinationPath('assets/mobile/constants.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/index.html'),
				this.destinationPath('assets/index.html')
			);
			this.fs.copyTpl(
				this.templatePath('assets/web/index.html'),
				this.destinationPath('assets/web/index.html')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/index.html'),
				this.destinationPath('assets/mobile/index.html')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/layout.web.sass'),
				this.destinationPath('assets/web/layout.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/layout.mobile.sass'),
				this.destinationPath('assets/mobile/layout.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/mixins.web.sass'),
				this.destinationPath('assets/web/mixins.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/mixins.mobile.sass'),
				this.destinationPath('assets/mobile/mixins.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/routes.js'),
				this.destinationPath('assets/web/routes.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/routes.js'),
				this.destinationPath('assets/mobile/routes.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/style.web.sass'),
				this.destinationPath('assets/web/style.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/style.mobile.sass'),
				this.destinationPath('assets/mobile/style.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/web/variables.web.sass'),
				this.destinationPath('assets/web/variables.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/mobile/variables.mobile.sass'),
				this.destinationPath('assets/mobile/variables.mobile.sass')
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
		fonts: function() {
			this.mkdir('assets/media/fonts');
		},
		images: function() {
			this.mkdir('assets/media/images');
		},
		pages: function() {
			this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.controller.js'),
	      this.destinationPath('assets/dashboard/dashboard.web.js')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.controller.js'),
	      this.destinationPath('assets/dashboard/dashboard.mobile.js')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.style.sass'),
	      this.destinationPath('assets/dashboard/dashboard.web.sass')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.style.sass'),
	      this.destinationPath('assets/dashboard/dashboard.mobile.sass')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.template.html'),
	      this.destinationPath('assets/dashboard/dashboard.web.html')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/dashboard/dashboard.template.html'),
	      this.destinationPath('assets/dashboard/dashboard.mobile.html')
	    );
		},
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
				"gulp-jshint",
				"gulp-livereload",
				"gulp-load-plugins",
				"gulp-minify-css",
				"gulp-minify-html",
				"gulp-ng-annotate",
				"gulp-plumber",
				"gulp-rename",
				"gulp-sass",
				"gulp-sourcemaps",
				"gulp-uglify",
				"jasmine-core",
				"jshint-stylish",
				"karma",
				"karma-jasmine",
				"karma-phantomjs-launcher",
				"mime",
				"path",
				"phantomjs",
				"progress",
				"run-sequence",
				"through2"
			], { 'saveDev': true });
		},
		bower: function() {
			this.bowerInstall([
				"angular-route",
				"underscore",
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
