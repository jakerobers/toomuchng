var gulp = require("gulp"),
	plugins = require('gulp-load-plugins')(),
	config = require('./config'),
	server = {
		web: {
			root: config.build_dir,
			host: "localhost",
			port: 9000,
			livereload: true
		}
	}

gulp.task("serve", function() {
	return plugins.connect.server(server.web)
});
