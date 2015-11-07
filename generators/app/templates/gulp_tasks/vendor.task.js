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
						"bower_components/angular/angular.js",
						"bower_components/angular-route/angular-route.js",
						"bower_components/angular-resource/angular-resource.js",
						"bower_components/angular-mocks/angular-mocks.js",
						"bower_components/angular-messages/angular-messages.js",
						"bower_components/angular-websocket/angular-websocket.js"
					],

					output: {
						file: "vendor.js",
						dir: config.web_dir
					}
				},
				mobile: {
					maps: [
						"bower_components/jquery/dist/jquery.min.map",
						"bower_components/underscore/underscore-min.map"
					],
					input: [
						"bower_components/jquery/dist/jquery.min.js",
						"bower_components/underscore/underscore-min.js",
						"bower_components/angular/angular.js",
						"bower_components/angular-route/angular-route.js",
						"bower_components/angular-resource/angular-resource.js",
						"bower_components/angular-mocks/angular-mocks.js",
						"bower_components/angular-messages/angular-messages.js",
						"bower_components/angular-websocket/angular-websocket.js"
					],

					output: {
						file: "vendor.js",
						dir: config.mobile_dir
					}
				}
			},
			css: {
				web: {
					input: [
						"bower_components/components-font-awesome/css/font-awesome.min.css"
					],

					output: {
						file: "vendor.css",
						dir: config.web_dir
					}
				},
				mobile: {
					input: [
						"bower_components/components-font-awesome/css/font-awesome.min.css"
					],

					output: {
						file: "vendor.css",
						dir: config.mobile_dir
					}
				}
			},
			fonts: {
				root: {
					input: [
						"bower_components/components-font-awesome/fonts/*"
					],
					output: {
						dir: config.build_dir + "/fonts/"
					}
				}
			},
		}
	};


/*************************************************
*								ROOT BUILD TASKS
**************************************************/
gulp.task("root:vendor:fonts", function() {
	return gulp.src(paths.vendor.fonts.root.input)
		.pipe(gulp.dest(paths.vendor.fonts.root.output.dir))
});

gulp.task("root:vendor", ["root:vendor:fonts"]);

/*************************************************
*								WEB BUILD TASKS
**************************************************/

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



gulp.task("web:vendor", [
	"web:vendor:js",
	"web:vendor:maps",
	"web:vendor:css",
]);


/*************************************************
*								MOBILE BUILD TASKS
**************************************************/


gulp.task("mobile:vendor:js", function() {
	return gulp.src(paths.vendor.js.mobile.input)
		.pipe(plugins.concat(paths.vendor.js.mobile.output.file))
	    .pipe(gulp.dest(paths.vendor.js.mobile.output.dir))
	    .pipe(plugins.connect.reload())
});

gulp.task("mobile:watch:vendor", function() {
	return gulp.watch(paths.vendor.js.mobile.input, ["mobile:vendor"]);
});

gulp.task("mobile:vendor:maps", function() {
	return gulp.src(paths.vendor.js.mobile.maps)
		.pipe(gulp.dest(paths.vendor.js.mobile.output.dir))
});

gulp.task("mobile:vendor:css", function() {
	return gulp.src(paths.vendor.css.mobile.input)
		.pipe(plugins.concat(paths.vendor.css.mobile.output.file))
		.pipe(gulp.dest(paths.vendor.css.mobile.output.dir))
		.pipe(plugins.connect.reload());
});

gulp.task("mobile:vendor", [
	"mobile:vendor:js",
	"mobile:vendor:maps",
	"mobile:vendor:css",
]);
