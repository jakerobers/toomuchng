app.factory('<%= collection %>', function(<%= model %>, BaseCollection) {
	var <%= collection %> = function(params) {
		var self = _.extend({}, this);
		self.collection = [];
		if ( params ) {
			for ( var i = 0, property; property = params[i]; i++ ) {
				self.collection.push(self.model.prototype.init(property));
			}
		}
		return self;
	};
	<%= collection %>.prototype = Object.create(BaseCollection.prototype);
	<%= collection %>.prototype = _.extend(<%= collection %>.prototype, {
		model: <%= model %>,
		init: <%= collection %>
	});

	return <%= collection %>;
});
