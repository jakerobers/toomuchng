module.exports = function(config) {
  config.set({
	basePath: '',
	frameworks: ['jasmine'],
	files: [
		'.build/web/vendor.js',
		'.build/web/app.js',
		'spec/**/*-spec.js'
	],
	exclude: [
	],
	preprocessors: {},
	plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
	reporters: ['dots'],
	port: 9876,
	colors: true,
	logLevel: config.LOG_INFO,
	autoWatch: true,
	browsers: ['PhantomJS'],
	singleRun: true
  });
};
