angular.module('app')

.config(function($routeProvider) {

	//todo: sample route given below.
	var routes = {
		dashboardRoute: {
			templateUrl: 'templates/dashboard.web.html',
			controller: 'DashboardCtrl',
		}
	};

	$routeProvider
	.when('/', routes.dashboardRoute)
	.when('/dashboard', routes.dashboardRoute)
	.otherwise({
		redirectTo: routes.dashboardRoute
	});
});
