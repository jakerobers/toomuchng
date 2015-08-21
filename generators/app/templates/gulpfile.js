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
	return runSequence("clean", "web:build", "web:watch", "web:serve");
});


gulp.task("web:deploy:dev", function() {
	return runSequence("web:push:dev");
});

gulp.task("web:deploy:prod", function() {
	return runSequence("web:push:prod");
});

gulp.task("spec", function() {
	return runSequence("clean", "web:build", "test");
});

gulp.task("lint", ["web:lint"]);
gulp.task("default", ["web"]);
gulp.task("deploy", ["web:deploy:dev"]);

