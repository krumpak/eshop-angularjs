app.controller('navigationController', function($scope, $state){

	$scope.isStateActive = function (name) { 
		if( name == '/' ){
			return true;
		}else{
			return $state.is(name);
		}
	};

});
