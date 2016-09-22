app.factory('scenarioService', scenarioServices);
scenarioServices.$inject = ['$http', '$q'];

function scenarioServices($http, $q) {
    var baseUrl = '/Content/data';

    var service = {
        getScenario: getScenario,
        createScenario: createScenario
    };
    return service;

    ////////////

    function getScenario(id) {
        var call = $http({
            method: 'GET',
            url: baseUrl + '/scenario.json',
            params:{
                id: id
            }
        });

        return $q.when(call);
    }

    function createScenario(player1, player2) {
        var call = $http({
            method: 'GET', //'POST', //debe ser POST pero puse GET por el mock
            url: baseUrl + '/scenario.json',
            data: [player1, player2]
        });

        return $q.when(call);
    }
}

