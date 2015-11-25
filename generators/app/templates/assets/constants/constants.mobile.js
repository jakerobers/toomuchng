var determine_api_base = function(url) {
	var api = location.protocol + '//' + location.hostname + ':3000/api';
	if ( url.indexOf('domain') < 0 ) {
		api = 'https://domain.herokuapp.com';
	}
	return api;
}, determine_ws_base = function(url) {
	var ws = 'ws://'+ location.hostname +':3000/';
	if ( url.indexOf('domain') < 0 ) {
		ws = 'ws://domain.herokuapp.com';
	}
	return ws;
};

angular.module('app')
.constant('ngAuthSettings', {
	apiServiceBaseUri: determine_api_base(document.URL),
	wsServiceBaseUri: determine_ws_base(document.URL),
})
.constant('httpOptions', {
	'Content-Type': 'application/json; charset=utf-8',
	'Accept': 'application/json, text/javascript'
})
.constant('USER_ROLES', {
	all: '*',
	admin: 'admin',
	user: 'user'
})
.constant('AUTH_EVENTS', {
	loginSuccess: 'auth-login-success',
	loginFailed: 'auth-login-failed',
	logoutSuccess: 'auth-logout-success',
	isAuthenticated: 'auth-is-authenticated',
	notAuthenticated: 'auth-not-authenticated',
	isAuthorized: 'auth-is-authorized',
	notAuthorized: 'auth-not-authorized'
});
