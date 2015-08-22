var gulp = require('gulp');

gulp.task("web:build", [
	'web:vendor',
	'web:scripts',
	'web:html',
	'web:css',
	'web:images'
]);
