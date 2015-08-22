'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ngMessages', 'ngWebSocket', 'ui.bootstrap']);


app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';		//vnd.api+
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';	//vnd.api+
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';		//vnd.api+
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';	//vnd.api+
}]);
