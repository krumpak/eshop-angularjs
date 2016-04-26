var app = angular.module('app', ['ui.router']);

app.controller('isActiveNavController', function($scope, $location){

	$scope.isActiveNav = function (viewLocation) { 
		return viewLocation === $location.path();
	};

});