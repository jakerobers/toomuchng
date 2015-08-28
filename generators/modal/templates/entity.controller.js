app.controller('<%= entity %>Ctrl', ['$scope', '$modalInstance',
function($scope, $modalInstance) {

	/**
	 * Place the commented code below in the component where the modal
	 * should be instantiated. This component should also include the
	 * $modal dependency injection.
	 */

	// var modalInstance = $modal.open({
	// 	animation: $scope.animationsEnabled,
	// 	controller: 'exampleCtrl',
	// 	templateUrl: '/templates/example.template.html',
	// 	size: 'md',
	// 	resolve: {
	// 		entity: function() {
	// 			return $scope.entity
	// 		}
	// 	}
	// });

	// modalInstance.result.then(function (results) {
	//		//do something
	// });

	$scope.ok = function () {
		var result = null;

		$modalInstance.close(result);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}]);
