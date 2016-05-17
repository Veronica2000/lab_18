var app = angular.module("angularApp");

app.controller("palController", function($scope, angularService, $location){


	$scope.getWord = function(word){
		
		var display = "";
		var newWord = word;
		
		var wordReverse = newWord.toLowerCase().split('').reverse()
		.join('');

			if (newWord === wordReverse){
		 	display = newWord + " is a palindrome"
			 	}

			else if (newWord !== wordReverse){
			display = newWord + " is not a palindrome"
			}

		angularService.saveData(display);
		$location.path('/view');
	};

});