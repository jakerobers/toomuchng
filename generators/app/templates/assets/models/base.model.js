app.factory('BaseModel', function(ngAuthSettings, $http, httpOptions, $q) {
	var BaseModel = function() {

	};

	BaseModel.prototype = {
		attributes: [],
		label: "",
		type: "",
		endpoint: function() {
			return null;
		},
		expand: function() {
			console.error("Expand not implemented.")
		},
		compress: function(data) {
			console.log(data);
		},
		create: function(options) {
			var deferred = $q.defer(),
				url = ngAuthSettings.apiServiceBaseUri + this.endpoint();
			if( !options ) {
				options = {};
			}
			options = _.extend(options, {
				'method': 'POST',
				'url': url,
				'headers': httpOptions,
				'data': this.compress()
			});
			$http(options).success(function(results) {
				deferred.resolve(this.init(this.expand(results)));
			}.bind(this)).catch(deferred.reject);
			return deferred.promise;
		},
		fetch: function(options) {
			var deferred = $q.defer(),
				url = ngAuthSettings.apiServiceBaseUri + this.endpoint() + "/" + this.id;
			if( !options ) {
				options = {};
			}
			options = _.extend(options, {
				'method': 'GET',
				'url': url,
				'headers': httpOptions,
			});
			$http(options).success(function(results) {
				deferred.resolve(this.init(this.expand(results)));
			}.bind(this)).catch(deferred.reject);
			return deferred.promise;
		},
		save: function(options) {
			var deferred = $q.defer(),
				url = ngAuthSettings.apiServiceBaseUri + this.endpoint() + "/" + this.id;
			if( !options ) {
				options = {};
			}
			options = _.extend(options, {
				'method': 'PUT',
				'url': url,
				'headers': httpOptions,
				'data': this.compress()
			});
			$http(options).success(function(results) {
				deferred.resolve(this.init(this.expand(results)));
			}.bind(this)).catch(deferred.reject);
			return deferred.promise;
		},
		destroy: function(options) {
			var deferred = $q.defer(),
				url = ngAuthSettings.apiServiceBaseUri + this.endpoint() + "/" + this.id;
			if( !options ) {
				options = {};
			}
			options = _.extend(options, {
				'method': 'DELETE',
				'url': url,
				'headers': httpOptions
			});
			$http(options).success(deferred.resolve.bind(this)).catch(deferred.reject);
			return deferred.promise;
		}
	};

	return BaseModel;
});
