app.directive('mainFooter', function(){
	return {
		restrict: 'E',
		templateUrl: './templates/mainFooter.html',
		controller: 'isActiveNavController'
	}
});
