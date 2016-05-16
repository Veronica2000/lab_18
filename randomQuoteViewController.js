var app = angular.module("angularApp");

app.controller("randomQuoteViewController", function($scope, angularQuoteService){
	
curl -X POST --include 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies' \
  -H 'X-Mashape-Key: W2sLBcThGdmshKCq3u1mMfDVmBrip1UP4OUjsn0AXAGDL66wNN' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'

  function randomQuote() { 
 	var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
       	document.getElementById("output").innerHTML = data.source; 
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "YOUR_API_KEY"); // Enter here your Mashape key
    }
});
  

});