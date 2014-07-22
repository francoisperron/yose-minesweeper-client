var $ = $ || require('jquery');
var Cell = Cell || require('./cell');

function Board() {
}

Board.prototype.render = function () {
    var board = $('#board');
    for (var i = 1; i < 9; i++) {
        board.append('<tr></tr>');
        for (var j = 1; j < 9; j++) {
            board.find('tr:last').append(new Cell(i, j).render());
        }
    }
};

Board.prototype.load = function (grid) {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            new Cell(i + 1, j + 1).load(grid[i][j]);
        }
    }
};

Board.prototype.reveal = function (row, col) {
    var cell = new Cell(row,col);
    cell.reveal();

    if(cell.bombsAround() == 0){
        if(new Cell(row - 1, col - 1).isUnknown()) this.reveal(row - 1, col - 1);
        if(new Cell(row - 1, col    ).isUnknown()) this.reveal(row - 1, col    );
        if(new Cell(row - 1, col + 1).isUnknown()) this.reveal(row - 1, col + 1);
        if(new Cell(row    , col - 1).isUnknown()) this.reveal(row    , col - 1);
        if(new Cell(row    , col + 1).isUnknown()) this.reveal(row    , col + 1);
        if(new Cell(row + 1, col - 1).isUnknown()) this.reveal(row + 1, col - 1);
        if(new Cell(row + 1, col    ).isUnknown()) this.reveal(row + 1, col    );
        if(new Cell(row + 1, col + 1).isUnknown()) this.reveal(row + 1, col + 1);
    }
};


var module = module || {};
module.exports = Board;