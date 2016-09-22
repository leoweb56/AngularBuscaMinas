var scenarioController = function ($timeout, $scope, $rootScope, scenarioService) {
    var vm = this;

    vm.scenario = null;
    vm.player1 = $rootScope.player1;
    vm.player2 = $rootScope.player2;

    scenarioService.createScenario($rootScope.player1, $rootScope.player2).then(function (response) {
        vm.scenario = response.data;
        
    })

    vm.clickCell = function (cell) {
        console.log(cell);
    }
    
}

scenarioController.$inject = ['$timeout', '$scope', '$rootScope','scenarioService'];
app.controller('scenarioController', scenarioController);
