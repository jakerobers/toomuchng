var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	_hasAuth: false,

	writing: {
		root: function() {
			this.fs.copyTpl(
				this.templatePath('gitignore'),
				this.destinationPath('.gitignore')
			);
		},

		assets: function() {
			this.fs.copyTpl(
				this.templatePath('assets/applications/web/app.js'),
				this.destinationPath('assets/applications/web/app.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/app.js'),
				this.destinationPath('assets/applications/mobile/app.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/constants/constants.web.js'),
				this.destinationPath('assets/constants/constants.web.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/constants/constants.mobile.js'),
				this.destinationPath('assets/constants/constants.mobile.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/index.html'),
				this.destinationPath('assets/index.html')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/web/index.html'),
				this.destinationPath('assets/applications/web/index.html')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/index.html'),
				this.destinationPath('assets/applications/mobile/index.html')
			);

			this.fs.copyTpl(
				this.templatePath('assets/applications/web/layout.web.sass'),
				this.destinationPath('assets/applications/web/layout.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/layout.mobile.sass'),
				this.destinationPath('assets/applications/mobile/layout.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/applications/web/mixins.web.sass'),
				this.destinationPath('assets/applications/web/mixins.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/mixins.mobile.sass'),
				this.destinationPath('assets/applications/mobile/mixins.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/applications/web/routes.js'),
				this.destinationPath('assets/applications/web/routes.js')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/routes.js'),
				this.destinationPath('assets/applications/mobile/routes.js')
			);

			this.fs.copyTpl(
				this.templatePath('assets/applications/web/style.web.sass'),
				this.destinationPath('assets/applications/web/style.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/style.mobile.sass'),
				this.destinationPath('assets/applications/mobile/style.mobile.sass')
			);

			this.fs.copyTpl(
				this.templatePath('assets/applications/web/variables.web.sass'),
				this.destinationPath('assets/applications/web/variables.web.sass')
			);
			this.fs.copyTpl(
				this.templatePath('assets/applications/mobile/variables.mobile.sass'),
				this.destinationPath('assets/applications/mobile/variables.mobile.sass')
			);
		},

		collections: function() {
			this.mkdir('assets/collections');
		},
		constants: function() {
			this.mkdir('assets/constants');
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
			this.mkdir('assets/static/fonts');
		},
		images: function() {
			this.mkdir('assets/static/images');
		},
		models: function() {
			this.mkdir('assets/models');
		},
		pages: function() {
			this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.controller.js'),
	      this.destinationPath('assets/components/dashboard/dashboard.web.js')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.controller.js'),
	      this.destinationPath('assets/components/dashboard/dashboard.mobile.js')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.style.sass'),
	      this.destinationPath('assets/components/dashboard/dashboard.web.sass')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.style.sass'),
	      this.destinationPath('assets/components/dashboard/dashboard.mobile.sass')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.template.html'),
	      this.destinationPath('assets/components/dashboard/dashboard.web.html')
	    );
	    this.fs.copyTpl(
	      this.templatePath('assets/components/dashboard/dashboard.template.html'),
	      this.destinationPath('assets/components/dashboard/dashboard.mobile.html')
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
				"mime",
				"path",
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
				"angular-websocket"
			], { 'save': true });
		}
	}
});
