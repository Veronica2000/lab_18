 var app = angular.module("angularApp");

  app.controller("randomQuoteInputController", function($scope, randomQuoteService, $location){

    $scope.getRandomQuote = function() {
      console.log("input");
      randomQuoteService.selectRandomQuote();
      $location.path('/randomquoteview');
    }
  });  
