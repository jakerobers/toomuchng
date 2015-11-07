var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	del = require("del"),
	config = require('./config');


gulp.task("clean", function(done) {
	del(config.build_dir).then(function() {
    done();
  });
});
