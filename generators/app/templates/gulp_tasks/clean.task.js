var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	del = require("del"),
	config = require('./config');


gulp.task("clean", function() {
	del(config.build_dir)
});
