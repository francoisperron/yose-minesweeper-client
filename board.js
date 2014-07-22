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
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            new Cell(i + 1, j + 1).load(grid[i][j]);
        }
    }
};

Board.prototype.reveal = function (row, col) {
    var cell = new Cell(row,col);
    cell.reveal();
};

var module = module || {};
module.exports = Board;