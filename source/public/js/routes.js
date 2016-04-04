'use strict';
define([
    'angularApp',
    'controllers'
], function(app) {
    console.log('routing');
    app.config(['$routeProvider', function(routeProvider) {
            routeProvider.when('/home', {
                templateUrl: 'views/home.html',
                controller:  'HomeController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);
});
