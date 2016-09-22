app.filter('showPlayers', function () {
    return function (input, playerName1, playerName2) {
        return playerName1 + ' ' + input + ' ' + playerName2;
    };
});