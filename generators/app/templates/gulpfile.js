var gulp = require("gulp"),
	runSequence = require("run-sequence"),
	Server = require('karma').Server;

require("./gulp_tasks/build.task.js");
require("./gulp_tasks/clean.task.js");
require("./gulp_tasks/css.task.js");
require("./gulp_tasks/fonts.task.js");
require("./gulp_tasks/html.task.js");
require("./gulp_tasks/images.task.js");
require("./gulp_tasks/javascript.task.js");
require("./gulp_tasks/serve.task.js");
require("./gulp_tasks/vendor.task.js");
require("./gulp_tasks/watch.task.js");
require("./gulp_tasks/push.task.js");
require("./gulp_tasks/spec.task.js");


gulp.task("web", function() {
  return runSequence("web:build", "web:watch");
});

gulp.task("mobile", function() {
  return runSequence("mobile:build", "mobile:watch");
});

gulp.task("root", function() {
  return runSequence("root:build");
});

gulp.task("build", function() {
  return runSequence("clean", "root", "web", "mobile", "serve");
});

gulp.task("spec", function() {
  return runSequence("clean", "root:build", "web:build", "mobile:build", "test");
});


gulp.task("lint", ["web:lint"]);
gulp.task("default", ["build"]);
gulp.task("deploy", ["push:dev"]);

