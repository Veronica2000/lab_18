var app = angular.module("angularApp");

	app.factory("randomQuoteService", function($http){
	console.log("Hi");

	var randomQuotation = ""; 
		
	function getRandomQuote() {
				return $http.post("https://andruxnet-random-famous-quotes.p.mashape.com"); 
				{};
				{
   				headers: {
				'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
    		}
    	}
  		
  		);
	});

			return{
				selectRandomQuote: function (quote) {
					randomQuotation = quote;
				}	
	
			getRandomQuote: getRandomQuote
				
			};
		
