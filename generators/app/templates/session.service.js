app.service('Session', function() {

	this.create = function(user) {
		this.user = user;
	};
	this.destroy = function() {
		this.user = null;
	};
	return this;
});