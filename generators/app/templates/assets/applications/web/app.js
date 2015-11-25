'use strict';

angular.module('dashboard', []);

angular.module('app', ['ngRoute', 'ngResource', 'ngMessages', 'ngWebSocket'])


config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
