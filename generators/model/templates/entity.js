app.constant('<%= entity %>Attributes', [])
app.factory('<%= entity %>', ['ngAuthSettings', '$http', '$q', 'BaseModel', '<%= entity %>Attributes', function(ngAuthSettings, $http, $q, BaseModel, <%= entity %>Attributes) {
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
	<%= entity %>.prototype = _.extend(<%= entity %>.prototype, {
		attributes: [],
		endpoint: function() {
			return "/<%= endpoint %>";
		},
		type: "",
		init: <%= entity %>,
		expand: function(data) {
			return new JSONApiExpander(data).attributes(this.attributes)
				.toArray();
		},

		compress: function() {
			return new JsonApiCompressor(this)
				.attributes(<%= entity %>Attributes)
				.done();
		}
	});


	return <%= entity %>;
}]);
