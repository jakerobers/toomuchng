var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	paths = {
		images: {
			media: {
				input: [
					'assets/media/images/**.*'
				],
				output: {
					dir: config.build_dir + "/images/"
				}
			}
		}
	};

gulp.task("media:images", function() {
	return gulp.src(paths.images.media.input)
		.pipe(plugins.flatten())
		.pipe(gulp.dest(paths.images.media.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("media:watch:images", function() {
	return gulp.watch(paths.images.media.input, ["media:images"]);
});
