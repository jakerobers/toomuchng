app.factory('UserModel', ['$http', '$resource', 'ngAuthSettings', 'BaseModel', function($http, $resource, ngAuthSettings, BaseModel) {
	var User = function(params) {
		var self = _.extend({}, this);
		_.each(User.prototype.attributes, function(val) {
			if ( params[val] ) {
				self[val] = params[val];
			}
		}.bind(self));
		if ( params.id ) {
			self.id = params.id;
		}

		return self;
	};
	User.prototype = Object.create(BaseModel.prototype);
	User.prototype = _.extend(User.prototype, {
		attributes: ['email', 'password'],
		endpoint: function() {
			return "/users";
		},
		type: "user",
		init: User,
		expand: function(data) {
			return new JSONApiExpander(data).attributes(this.prototype.attributes).toArray();
		},

		compress: function() {
			return new JsonApiCompressor(this).attributes(this.attributes).done();
		}
	});

	return User;
}]);
