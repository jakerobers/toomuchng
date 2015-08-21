app.directive('<%= entity %>', [function() {
	return {
	    restrict: 'AE',
	    templateUrl: '/templates/<%= entity %>.template.html',
	    link: function($scope, element, attributes) {

	    }
	}
}]);
