app.directive('scenarioCells', ['cellFactory', scenarioCells]);

function scenarioCells(cellFactory) {
    var TYPES = {
        MINE: 'mine',
        EMPTY: 'empty',
        COVERED: 'covered',
        NUMBER: 'number'
    };


    var directive = {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            clickCell: '&',
            model: '=ngModel'
        },
        templateUrl: 'Scripts/app/directives/scenarioDirectiveView.html',
        //replace: true, //reemplaza el tag de la directiva por el html templateUrl
        link: link
    };
    return directive;

    /*
    https://docs.angularjs.org/guide/directive
    OPTIONS
        "restrict: 'C'"
        'A' - only matches attribute name
        'E' - only matches element name
        'C' - only matches class name
        'M' - only matches comment

        'AEC' - matches either attribute or element or class name

        ng-transclude: true -> si se quiere en el template de la directiva mostrar el contenido del cual lo llama
        <directiva>Quiero que se muestre dentro de la directiva</directiva>
        Dentro de la directiva <div ng-transclude></div>

        Scope
        OPTIONS:
            =   -> nombreAtributo: '='  el atributo se pasa por valor y se llama 'nombreAtributo', si le quiero cambiar el nombre 'nombreAtributo: =pepito', ahora para acceder
                        lo llamamos scope.pepito
            &   -> se utiliza para pasar una funcion que nos permite poder ejecutarla a demanda dentro de la directiva. funcion: '&'
                    <directiva funcion='miFuncion()'></directiva>
     */

    function link(scope, element, attrs) {
        /* */
        scope.cellFactory = cellFactory;

        scope.$watch(function (scope) { return scope.model }, function (value, oldValue) {
            updateScenario();
        }, true);

        scope.click = function (cell) {
            cell.mostrar();
            scope.clickCell({ cell: cell });
        }

        function updateScenario() {
            if (!scope.model) {
                return;
            }

            scope.rows = [];

            for (var i = 0; i < scope.model.Rows; i++) {
                var row = {
                    columns: []
                };

                for (var j = 0; j < scope.model.Columns; j++) {

                    var cell = scope.cellFactory.createCell(i, j, scope.model.Mines);
                    row.columns.push(cell);
                }

                scope.rows.push(row);
            }
        }

    }

}