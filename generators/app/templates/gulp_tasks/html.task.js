var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	paths = {
		html: {
			web: {
				input: {
					templates: [
						"assets/pages/**/*.html",
						"assets/components/**/*.html",
					],
					index: "assets/index.html",
				},
				output: {
					dir: config.web_dir + "/templates/",
					file: config.web_dir
				}
			}
		}
	};


gulp.task("web:html:index", function() {
	return gulp.src(paths.html.web.input.index)
		.pipe(gulp.dest(paths.html.web.output.file))
		.pipe(plugins.connect.reload());
});

gulp.task("web:html:templates", function() {
	return gulp.src(paths.html.web.input.templates)
		.pipe(plugins.flatten())
		.pipe(gulp.dest(paths.html.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:html", ["web:html:templates", "web:html:index"]);


gulp.task("web:watch:html", function() {
	var files = paths.html.web.input.templates;
	files.push(paths.html.web.input.index);
	return gulp.watch(files, ["web:html"]);
});
