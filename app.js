var angularApp = angular.module('angularApp', ['ui.router']);

	angularApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('pal', {
            url: '/',
            templateUrl: 'partial-pal.html'
        })

          .state('view', {
            url: '/view',
            templateUrl: 'partial-view.html'
        })
        
});