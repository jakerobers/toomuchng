var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	compile_options = {
		style: 'compressed',
		noCache: true,
		'sourcemap=none': true
	},
	paths = {
		sass: {
			web: {
				input: [
					'assets/**/*.web.sass'
				],
				output: {}
			},

			mobile: {
				input: [
					'assets/**/*.mobile.sass'
				],
				output: {}
			}
		},
		css: {
			web: {
				input: ['assets/web/style.web.sass'],
				output: {
					file: 'app.css',
					dir: config.web_dir
				}
			},

			mobile: {
				input: ['assets/mobile/style.mobile.sass'],
				output: {
					file: 'app.css',
					dir: config.mobile_dir
				}
			}
		}
	};

gulp.task("web:css", function() {
	return gulp.src(paths.css.web.input)
	    .pipe(plugins.plumber(config.showError))
		.pipe(plugins.sass(compile_options))
		.pipe(plugins.concat(paths.css.web.output.file))
		.pipe(plugins.sourcemaps.init())
	    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.css.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:watch:css", function() {
	return gulp.watch(paths.sass.web.input, ['web:css']);
});



gulp.task("mobile:css", function() {
	return gulp.src(paths.css.mobile.input)
	    .pipe(plugins.plumber(config.showError))
		.pipe(plugins.sass(compile_options))
		.pipe(plugins.concat(paths.css.mobile.output.file))
		.pipe(plugins.sourcemaps.init())
	    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.css.mobile.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("mobile:watch:css", function() {
	return gulp.watch(paths.sass.mobile.input, ['mobile:css']);
});
