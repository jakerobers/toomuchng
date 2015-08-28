app.directive('<%= entity %>', [function() {
	return {
	    restrict: 'AE',
	    templateUrl: '/templates/<%= filename %>.template.html',
	    link: function($scope, element, attributes) {

	    }
	}
}]);
