var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	paths = {
		images: {
			web: {
				input: [
					'assets/images/**.*'
				],
				output: {
					dir: config.web_dir + "/images/"
				}
			}
		}
	};

gulp.task("web:images", function() {
	return gulp.src(paths.images.web.input)
		.pipe(plugins.flatten())
		.pipe(gulp.dest(paths.images.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:watch:images", function() {
	return gulp.watch(paths.images.web.input, ["web:images"]);
});
