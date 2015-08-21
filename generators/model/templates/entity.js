app.factory('<%= entity %>', ['ngAuthSettings', '$http', '$q', 'BaseModel', function(ngAuthSettings, $http, $q, BaseModel) {
	var <%= entity %> = function(params) {
		var self = _.extend({}, this);
		if ( _.isArray(params) ) {
			params = params[0];
		}
		_.each(<%= entity %>.prototype.attributes, function(val) {
			if ( params[val] ) {
				self[val] = params[val];
			}
		}.bind(self));

		if ( params.manager ) {
			self.manager = User.prototype.init(params.manager);
		}

		if ( params.id ) {
			self.id = params.id;
		}

		return self;
	};


	<%= entity %>.prototype = Object.create(BaseModel.prototype);
	<%= entity %>.prototype = _.extend(BaseModel.prototype, {
		attributes: [],
		endpoint: function() {
			return "";
		},
		type: "",
		init: <%= entity %>,
		expand: function(data) {
			return new JSONApiExpander(data).attributes(this.attributes)
				.toArray();
		},

		compress: function() {
			return new JsonApiCompressor(this)
				.attributes()
				.done();
		}
	});


	return <%= entity %>;
}]);
