var gulp = require('gulp');

gulp.task("web:watch", [
	'web:watch:html',
	'web:watch:js',
	'web:watch:vendor',
	'web:watch:css',
	'web:watch:images'
]);
