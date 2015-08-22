var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	server = {
		web: {
			root: config.web_dir,
			host: "localhost",
			port: 9000,
			livereload: true
		}
	}

gulp.task("web:serve", function() {
	return plugins.connect.server(server.web)
});
