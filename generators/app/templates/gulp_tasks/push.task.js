var gulp = require('gulp'),
	awspublish = require('gulp-awspublish'),
	config = require('./config.js'),
	secrets = require('./secrets.js');

gulp.task('web:push:dev', function() {
	var publisher = awspublish.create({
		params: {
			Bucket: secrets.bucket_name
		},
		accessKeyId: secrets.aws_key,
		secretAccessKey: secrets.aws_secret
	});
	var headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};
	return gulp.src([config.web_dir + "/**/*.*"])
		.pipe(publisher.publish(headers, {
			force: true
		}))
		.pipe(awspublish.reporter());
});

gulp.task('web:push:dev', function() {
	var publisher = awspublish.create({
		params: {
			Bucket: secrets.bucket_name
		},
		accessKeyId: secrets.aws_key,
		secretAccessKey: secrets.aws_secret
	});
	var headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};
	return gulp.src([config.web_dir + "/**/*.*"])
		.pipe(publisher.publish(headers, {
			force: true
		}))
		.pipe(awspublish.reporter());
});
