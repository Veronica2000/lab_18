var app = angular.module('angularApp', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('pal', {
            url: '/',
            templateUrl: 'partial-pal.html',
            controller: 'palController'
        })

          .state('view', {
            url: '/view',
            templateUrl: 'partial-view.html',
            controller: 'viewController'
        })
      

             // HOME STATES AND NESTED VIEWS ========================================
        .state('randomQuoteInput', {
            url: '/randomQuoteInput',
            templateUrl: 'partial-randomquoteinput.html',
            controller: 'randomQuoteInputController'
        })

          .state('randomQuoteView', {
            url: '/randomQuoteView',
            templateUrl: 'partial-randomquoteview.html',
            controller: 'randomQuoteViewController'
        })  
});