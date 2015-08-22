var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),

	paths = {
		vendor: {
			js: {
				web: {
					maps: [
						"bower_components/jquery/dist/jquery.min.map",
						"bower_components/underscore/underscore-min.map"
					],
					input: [
						"bower_components/jquery/dist/jquery.min.js",
						"bower_components/underscore/underscore-min.js",
						"vendor/jsonapi_expander.js",
						"vendor/jsonapi_compressor.js",
						"bower_components/angular/angular.js",
						"bower_components/angular-route/angular-route.js",
						"bower_components/angular-resource/angular-resource.js",
						"bower_components/angular-mocks/angular-mocks.js",
						"bower_components/angular-messages/angular-messages.js",
						"bower_components/angular-bootstrap/ui-bootstrap.js",
						"bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
						"bower_components/angular-websocket/angular-websocket.js"
					],

					output: {
						file: "vendor.js",
						dir: config.web_dir
					}
				}
			},
			css: {
				web: {
					input: [
						"bower_components/bootstrap/dist/css/bootstrap.min.css",
						"bower_components/components-font-awesome/css/font-awesome.min.css"
					],

					output: {
						file: "vendor.css",
						dir: config.web_dir
					}
				}
			},
			fonts: {
				web: {
					input: [
						"bower_components/bootstrap/fonts/*",
						"bower_components/components-font-awesome/fonts/*"
					],
					output: {
						dir: config.web_dir + "/fonts/"
					}
				}
			}
		}
	};

gulp.task("web:vendor:js", function() {
	return gulp.src(paths.vendor.js.web.input)
		.pipe(plugins.concat(paths.vendor.js.web.output.file))
	    .pipe(gulp.dest(paths.vendor.js.web.output.dir))
	    .pipe(plugins.connect.reload())
});

gulp.task("web:watch:vendor", function() {
	return gulp.watch(paths.vendor.js.web.input, ["web:vendor"]);
});

gulp.task("web:vendor:maps", function() {
	return gulp.src(paths.vendor.js.web.maps)
		.pipe(gulp.dest(paths.vendor.js.web.output.dir))
});

gulp.task("web:vendor:css", function() {
	return gulp.src(paths.vendor.css.web.input)
		.pipe(plugins.concat(paths.vendor.css.web.output.file))
		.pipe(gulp.dest(paths.vendor.css.web.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("web:vendor:fonts", function() {
	return gulp.src(paths.vendor.fonts.web.input)
		.pipe(gulp.dest(paths.vendor.fonts.web.output.dir))
});

gulp.task("web:vendor", [
	"web:vendor:js",
	"web:vendor:maps",
	"web:vendor:css",
	"web:vendor:fonts"
]);
