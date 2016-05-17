  var angularModule = angular.module("angularApp");
    
  app.controller("randomQuoteViewController", function($scope, randomQuoteService)
  {
      randomQuoteService.getRandomQuote().then(function(data)
      { 
      $scope.quotes = data.data.quote;
      $scope.author = data.data.author;
    });
  });