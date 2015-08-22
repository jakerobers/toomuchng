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
					'assets/pages/**/*.sass',
					'assets/components/**/*.sass'
				],
				output: {}
			}
		},
		css: {
			web: {
				input: ['assets/style.sass'],
				output: {
					file: 'app.css',
					dir: config.web_dir
				}
			}
		}
	};

gulp.task("web:css", function() {
	return gulp.src(paths.css.web.input)
		.pipe(plugins.sass(compile_options))
		.pipe(plugins.concat(paths.css.web.output.file))
		.pipe(gulp.dest(paths.css.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:watch:css", function() {
	return gulp.watch(paths.sass.web.input, ['web:css']);
});
