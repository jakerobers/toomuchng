var gulp = require('gulp');

gulp.task("web:build", [
	'web:vendor',
	'web:scripts',
	'web:html',
	'web:css',
]);

gulp.task("mobile:build", [
  'mobile:vendor',
  'mobile:scripts',
  'mobile:html',
  'mobile:css',
]);

gulp.task("media:build", [
  'media:fonts',
  'media:images'
]);

gulp.task("root:build", [
  "root:vendor",
  "root:html:index"
]);
