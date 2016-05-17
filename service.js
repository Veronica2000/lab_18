var app = angular.module("angularApp");

	app.factory("angularService", function(){
		var word = "";
		
		return {
			
			saveData: function(display){
				word = display;
			},
			
			wordkey: function(){
				return word
			},

		};
		
	});