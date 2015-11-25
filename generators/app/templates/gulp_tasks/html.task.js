var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	paths = {
		html: {
			root: {
				input: {
					index: "assets/index.html"
				},
				output: config.build_dir
			},
			web: {
				input: {
					templates: [
						"assets/**/*.web.html",
						"assets/**/*.html",
						"!assets/**/*.mobile.html",
					],
					index: "assets/web/index.html",
				},
				output: {
					dir: config.web_dir + "/templates/",
					file: config.web_dir
				}
			},
			mobile: {
				input: {
					templates: [
						"assets/**/*.mobile.html",
						"assets/**/*.html",
						"!assets/**/*.web.html",
					],
					index: "assets/mobile/index.html",
				},
				output: {
					dir: config.mobile_dir + "/templates/",
					file: config.mobile_dir
				}
			}
		}
	},
	minify_options = {
    conditionals: true,
    spare:true
  };


gulp.task("web:html:index", function() {
	return gulp.src(paths.html.web.input.index)
		.pipe(plugins.minifyHtml(minify_options))
		.pipe(gulp.dest(paths.html.web.output.file))
		.pipe(plugins.connect.reload());
});

gulp.task("web:html:templates", function() {
	return gulp.src(paths.html.web.input.templates)
		.pipe(plugins.flatten())
		.pipe(plugins.minifyHtml(minify_options))
		.pipe(gulp.dest(paths.html.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:html", ["web:html:templates", "web:html:index"]);

gulp.task("web:watch:html", function() {
	var files = paths.html.web.input.templates;
	files.push(paths.html.web.input.index);
	return gulp.watch(files, ["web:html"]);
});



gulp.task("mobile:html:index", function() {
	return gulp.src(paths.html.mobile.input.index)
		.pipe(plugins.minifyHtml(minify_options))
		.pipe(gulp.dest(paths.html.mobile.output.file))
		.pipe(plugins.connect.reload());
});

gulp.task("mobile:html:templates", function() {
	return gulp.src(paths.html.mobile.input.templates)
		.pipe(plugins.flatten())
		.pipe(plugins.minifyHtml(minify_options))
		.pipe(gulp.dest(paths.html.mobile.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("mobile:watch:html", function() {
	var files = paths.html.mobile.input.templates;
	files.push(paths.html.mobile.input.index);
	return gulp.watch(files, ["mobile:html"]);
});

gulp.task("mobile:html", ["mobile:html:templates", "mobile:html:index"]);


gulp.task("root:html:index", function() {
	return gulp.src(paths.html.root.input.index)
		.pipe(plugins.minifyHtml(minify_options))
		.pipe(gulp.dest(paths.html.root.output))
		.pipe(plugins.connect.reload());
});
