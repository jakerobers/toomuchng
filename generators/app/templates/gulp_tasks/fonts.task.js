var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	config = require('./config.js'),
	paths = {
		fonts: {
			media: {
				input: ['assets/media/fonts/**/*.*'],
				output: {
					dir: config.build_dir + "/fonts/"
				}
			}
		}
	};

gulp.task('media:fonts', function() {
	gulp.src(paths.fonts.media.input)
	    .pipe(gulp.dest(paths.fonts.media.output.dir))
	    .pipe(plugins.connect.reload())
});

gulp.task('media:watch:fonts', function() {
	gulp.watch( paths.vendor_fonts.media.input, ['media:fonts'] )
});
