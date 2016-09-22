app.factory('cellFactory', cellFactory);
cellFactory.$inject = ['$http', '$q'];

function cellFactory($http, $q) {
    var factory = {
        createCell: createCell
    };
    

    ////////////
    function createCell(row, column, mines) {
        var typesCell = {
            MINE: 'mine',
            NUMBER: 'number'
        };

        var cell = new Empty(row, column);

        var mine = getMine(row, column, mines);

        var type = mine != null ? typesCell.MINE : typesCell.NUMBER;

        switch (type) {
            case typesCell.MINE:
                cell = new Mine(row, column);
                break;

            case typesCell.NUMBER:
                var number = getCountNearMines(row, column, mines);
                if (number > 0) {
                    cell = new Number(row, column, number);
                }
                break;
            default:

        }

        return cell;
    }

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos

    function Cell(row, column, type) {
        this.row = row;
        this.column = column;
        this.imgName = 'covered';
        this.type = type;
    }

    Cell.prototype.mostrar = function () { throw 'not implement'; };

    //Mina
    function Mine(row, column) {
        Cell.call(this, row, column, 'mine');

        this.imgShowName = this.type;
    }

    Mine.prototype = Object.create(Cell.prototype);
    Mine.prototype.constructor = Mine;

    Mine.prototype.mostrar = function () { this.imgName = this.imgShowName };

    //Celda vacia
    function Empty(row, column) {
        Cell.call(this, row, column, 'empty');

        this.imgShowName = this.type;

    }

    Empty.prototype = Object.create(Cell.prototype);
    Empty.prototype.constructor = Empty;

    Empty.prototype.mostrar = function () { this.imgName = this.imgShowName };

    //Celda vacia
    function Number(row, column, number) {
        Cell.call(this, row, column, 'number');

        this.imgShowName = this.type + '-' + number;
    }

    Number.prototype = Object.create(Cell.prototype);
    Number.prototype.constructor = Number;

    Number.prototype.mostrar = function () { this.imgName = this.imgShowName };

    //functions aux

    function getCountNearMines(row, column, mines) {
        var count = 0;

        if (getMine(row + 1, column, mines)) {
            count++;
        }
        if (getMine(row - 1, column, mines)) {
            count++;
        }
        if (getMine(row, column + 1, mines)) {
            count++;
        }
        if (getMine(row, column - 1, mines)) {
            count++;
        }

        if (getMine(row + 1, column + 1, mines)) {
            count++;
        }
        if (getMine(row - 1, column - 1, mines)) {
            count++;
        }
        if (getMine(row + 1, column - 1, mines)) {
            count++;
        }
        if (getMine(row - 1, column + 1, mines)) {
            count++;
        }

        return count;
    }

    function getMine(row, column, mines) {
        var filter = mines.filter(function (mine) { return mine.Row == row && mine.Column == column });

        return filter.length > 0 ? filter[0] : null;
    }


    return factory; //pongo el retorno al final asi se ejecutan las lineas que permiten la herencia de los distintos tipos de celdas

}






