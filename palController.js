var app = angular.module("angularApp");

app.controller("palController", function($scope, angularService, $location){


	$scope.getWord = function(){
		var word = ""
		
		var wordReverse = word.toLowerCase().split('').reverse().join('');

		console.log(wordReverse);
	}
	// 	angularService.wordkey($scope.word);
	// 	$location.path('/view');
	// };

});