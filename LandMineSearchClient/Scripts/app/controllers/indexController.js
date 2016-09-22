var indexController = function ($scope) {
    var vm = this;

    vm.saludo = "Hola!";
}

indexController.$inject = ['$scope'];
app.controller('indexController', indexController);
