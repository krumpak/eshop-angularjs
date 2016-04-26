app.directive('mainNavigation', function(){
	return {
		restrict: 'E',
		templateUrl: './templates/mainNavigation.html',
		controller: 'isActiveNavController'
	}
});
