var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	stylish = require('jshint-stylish'),
	config = require('./config'),
	runSequence = require("run-sequence"),
	jshint_options = {
		bitwise: false,
		curly: true,
		eqeqeq: true,
		maxcomplexity: 7,
		unused: true,
		evil: true,
		browser: true
	},
	paths = {
		js: {
			web: {
				input: [
					"assets/app.js",
					"assets/routes.js",
					"assets/constants.js",
					"assets/filters/**/*.js",
					"assets/models/**/*.js",
					"assets/collections/**/*.js",
					"assets/services/**/*.js",
					"assets/directives/**/*.js",
					"assets/components/**/*.js",
					"assets/pages/**/*.js"
				],
				output: {
					file: "app.js",
					dir: config.web_dir
				}
			}
		}
	};

gulp.task("web:js", function() {
	return gulp.src(paths.js.web.input)
		.pipe(plugins.concat(paths.js.web.output.file))
		.pipe(gulp.dest(paths.js.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:lint", function() {
	return gulp.src(paths.js.web.input)
		.pipe(plugins.jshint(jshint_options))
		.pipe(plugins.jshint.reporter(stylish));
});


gulp.task("web:watch:js", function() {
	return gulp.watch(paths.js.web.input, ["web:scripts"]);
});

gulp.task("web:scripts", function() {
	return runSequence("web:js");
});
