var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	stylish = require('jshint-stylish'),
	config = require('./config'),
	ngAnnotate = require('gulp-ng-annotate'),
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
					"assets/web/app.js",
					"assets/web/routes.js",
					"assets/web/constants.js",
					"assets/**/*.web.js"
				],
				output: {
					file: "app.js",
					dir: config.web_dir
				}
			},
			mobile: {
				input: [
					"assets/mobile/app.js",
					"assets/mobile/routes.js",
					"assets/mobile/constants.js",
					"assets/**/*.mobile.js"
				],
				output: {
					file: "app.js",
					dir: config.mobile_dir
				}
			}
		}
	};

/*****************************************
*										WEB
******************************************/
gulp.task("web:js", function() {
	return gulp.src(paths.js.web.input)
		.pipe(plugins.concat(paths.js.web.output.file))
		.pipe(ngAnnotate())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write())
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


/*****************************************
*									MOBILE
******************************************/


gulp.task("mobile:js", function() {
	return gulp.src(paths.js.mobile.input)
		.pipe(plugins.concat(paths.js.mobile.output.file))
		.pipe(ngAnnotate())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.js.mobile.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("mobile:lint", function() {
	return gulp.src(paths.js.mobile.input)
		.pipe(plugins.jshint(jshint_options))
		.pipe(plugins.jshint.reporter(stylish));
});

gulp.task("mobile:watch:js", function() {
	return gulp.watch(paths.js.mobile.input, ["mobile:scripts"]);
});

gulp.task("mobile:scripts", function() {
	return runSequence("mobile:js");
});