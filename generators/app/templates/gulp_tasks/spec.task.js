var gulp = require("gulp"),
	Server = require('karma').Server;

gulp.task('test', function (done) {
	var newDir = __dirname;
	if ( newDir.indexOf('/' >= 0) ) {
		var newDir = newDir.substring(0, newDir.lastIndexOf("/"));
	}

	process.chdir(newDir);
	new Server({
		configFile: newDir + '/karma.conf.js',
		singleRun: true
	}, done).start();
});