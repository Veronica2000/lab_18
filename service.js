var app = angular.module("angularApp");

	app.factory("angularService", function(){
		var word = "";
		
		return {
			
			saveData: function(wordObject){

				word = wordObject;
				//console.log(words);
			},
			
			wordkey: function(){
				return word
			}

			// getData: function(){
			// 	return {
			// 		string: words,
			// };
		};
		
	});