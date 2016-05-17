var app = angular.module("angularApp");

app.controller("viewController", function($scope, angularService){
	
	$scope.wordObject = angularService.wordkey();

});