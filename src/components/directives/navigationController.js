app.controller('navigationController', function($scope, $state){

	$scope.isStateActive = function (name) { 
		return $state.is(name);
	};

});
