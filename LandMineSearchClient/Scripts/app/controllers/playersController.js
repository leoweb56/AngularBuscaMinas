var playersController = function ($scope, playersServices, $location, $rootScope) {
    var vm = this;

    vm.currentPlayer = {
        PlayerName: 'Juan',
        PlayerId: 1
    };

    vm.players = [];

    playersServices.getPlayers().then(function (response) {
        vm.players = response.data;
    });

    vm.gameStart = function(player){
        $rootScope.player1 = vm.currentPlayer;
        $rootScope.player2 = player;

        $location.path('/scenario');
    }
}

playersController.$inject = ['$scope', 'playersServices','$location', '$rootScope'];
app.controller('playersController', playersController);
