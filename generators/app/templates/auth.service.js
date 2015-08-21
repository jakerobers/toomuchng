app.service('Auth', [ '$http', '$rootScope', '$window', 'ngAuthSettings', 'Session', 'AUTH_EVENTS', '$q', 'User',
function($http, $rootScope, $window, ngAuthSettings, Session, AUTH_EVENTS, $q, User) {

	//the login function
	this.login = function(user, remember) {
		var url = ngAuthSettings.apiServiceBaseUri + "/sessions",
			request = user.compress(),
			deferred = $q.defer();

		$http.post(url, request).success(function(results) {
			if ( results.data.attributes.token ) {	 //&& results.data.attributes.role
				var userData = {};
				userData.token = results.data.attributes.token;
				userData.id = results.data.attributes.id;
				//userData.role = results.data.attributes.role;
				if ( remember ) {
					$window.localStorage.setItem('JWT', userData.token);
					$window.localStorage.setItem('userId', userData.id);
				}
				Session.create(userData);
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				deferred.resolve(results)
			} else {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				deferred.reject("An unknown error occured. If this persists, please contact us.");
			}
		}).error(function(results) {
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			deferred.reject(results);
		});
		return deferred.promise;
	};

	this.isAuthenticated = function() {
		var token = $window.localStorage.getItem('JWT'),
			userId = $window.localStorage.getItem('userId');
		if ( !Session.user && token && userId) {
			Session.create({
				id: $window.localStorage.userId,
				token: $window.localStorage.JWT
			});
		}

		if( !!Session.user ) {
			$rootScope.$broadcast(AUTH_EVENTS.isAuthenticated)
			return true;
		} else {
			$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
			return false;
		}

	};

	//check if the user is authorized to access the next route
	//this function can be also used on element level
	//e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
	this.isAuthorized = function(authorizedRoles) {
		if (!angular.isArray(authorizedRoles)) {
	      authorizedRoles = [authorizedRoles];
	    }
	    if ( (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1) ) {
	    	$rootScope.$broadcast(AUTH_EVENTS.isAuthorized, authorizedRoles);
	    	return true;
	    } else {
	    	$rootScope.$broadcast(AUTH_EVENTS.notAuthorized, authorizedRoles);
	    	return false;
	    }
	};

	//log out the user and broadcast the logoutSuccess event
	this.logout = function() {
		Session.destroy();
		if ( $window.localStorage.JWT ) {
			delete $window.localStorage.JWT;
		}

		if ( $window.localStorage.userId ) {
			delete $window.localStorage.userId;
		}

		$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
	}

	return this;
}]);
