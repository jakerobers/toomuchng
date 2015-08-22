var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	config = require('./config.js'),
	paths = {
		fonts: {
			web: {
				input: ['assets/fonts/**/*.*'],
				output: {
					dir: config.web_dir + "/fonts/"
				}
			}
		}
	};

gulp.task('web:fonts', function() {
	gulp.src(paths.fonts.web.input)
	    .pipe(gulp.dest(paths.fonts.web.output.dir))
	    .pipe(plugins.connect.reload())
});

gulp.task('web:watch:fonts', function() {
	gulp.watch( paths.vendor_fonts.web.input, ['web:fonts'] )
});
