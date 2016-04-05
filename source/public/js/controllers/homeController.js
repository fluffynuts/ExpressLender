define([
    'angularApp'
], function(app) {
    app.controller('HomeController', [
        '$scope',
    function(scope) {
        scope.message = "Welcome to Express Lender";
    }]);
});

