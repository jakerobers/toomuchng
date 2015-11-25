var gulp = require('gulp');

gulp.task("root:watch", [
  'root:watch:html'
]);

gulp.task("web:watch", [
	'web:watch:html',
	'web:watch:js',
	'web:watch:vendor',
	'web:watch:css',
]);

gulp.task("mobile:watch", [
  'mobile:watch:html',
  'mobile:watch:js',
  'mobile:watch:vendor',
  'mobile:watch:css',
]);

gulp.task("media:watch", [
  'media:watch:images'
]);

