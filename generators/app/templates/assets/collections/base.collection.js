app.factory('BaseCollection', function(ngAuthSettings, httpOptions, $http, $q) {
	var BaseCollection = function() {
		//check for model
	};

	BaseCollection.prototype = {
		model: null,
		init: null,
		fetch: function(options) {
			if ( this.model.prototype.endpoint().length === null ) {
				console.error(this.model.prototype.label + " does not have an endpoint");
			} else {
				var deferred = $q.defer(),
					url = ngAuthSettings.apiServiceBaseUri + this.model.prototype.endpoint();
				if( !options ) {
					options = {};
				}
				options = _.extend(options, {
					'method': 'GET',
					'url': url,
					'headers': httpOptions
				});
				$http(options).success(function(results) {
					var propData = this.model.prototype.expand(results),
						properties = this.init(propData);
					deferred.resolve(properties);
				}.bind(this)).catch(deferred.reject);

				return deferred.promise;
			}
		},
		update: function(newObject) {
			for ( var i = 0, obj; obj = this.collection[i]; i++ ) {
				if ( newObject.type === obj.type && newObject.id === obj.id ) {
					this.collection[i] = newObject;
				}
			}
			return this;
		},
		remove: function(object) {
			for ( var i = 0, obj; obj = this.collection[i]; i++ ) {
				if ( object.type === obj.type && object.id === obj.id ) {
					this.collection.splice(i, 1);
				}
			}
			return this;
		},
		add: function(object) {
			this.collection.push(object);
			return this;
		}
	}
	return BaseCollection;
});
