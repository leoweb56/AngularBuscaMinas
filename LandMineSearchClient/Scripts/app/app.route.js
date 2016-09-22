var config = function ($routeProvider) {
    $routeProvider
        .when('/players', {
            templateUrl: 'Home/Players'
        })
        .when('/scenario', {
            templateUrl: 'Home/Scenario'
        })
        .otherwise({
            redirectTo: '/players'
        });
}
app.config(config);
config.$inject = ['$routeProvider'];