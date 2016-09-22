app.factory('playersServices', playersServices);
playersServices.$inject = ['$http', '$q'];

function playersServices($http, $q) {
    var baseUrl = '/Content/data';

    var service = {
        getPlayers : getPlayers,
    };
    return service;

    ////////////
    
    function getPlayers() {
        var call = $http({
            method: 'GET',
            url: baseUrl + '/players.json'
        });

        return $q.when(call);
    }
}

