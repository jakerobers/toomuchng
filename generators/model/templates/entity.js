app.constant('<%= entity %>Attributes', [])
app.factory('<%= entity %>', function(ngAuthSettings, $http, $q, BaseModel, <%= entity %>Attributes) {
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

		//insert other relationship data

		if ( params.id ) {
			self.id = params.id;
		}

		return self;
	};


	<%= entity %>.prototype = Object.create(BaseModel.prototype);
	<%= entity %>.prototype = _.extend(<%= entity %>.prototype, {
		attributes: <%= entity %>Attributes,
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
				.attributes(<%= entity %>.prototype.attributes)
				.done();
		}
	});


	return <%= entity %>;
});
