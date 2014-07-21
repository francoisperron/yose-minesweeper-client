var $ = $ || require('jquery');

function Board() {
}

Board.prototype.render = function () {
    var board = $('#board');
    for (var i = 1; i < 9; i++) {
        board.append('<tr></tr>');
        for (var j = 1; j < 9; j++) {
            var id = 'cell-' + i + 'x' + j;
            board.find('tr:last').append('<td id="' + id + '" onClick=reveal(' + i + ',' + j + ')></td>');
        }
    }
};

function idOfCell(row, col) {
    return 'cell-' + row + 'x' + col;
}

function load() {
    if (document.grid == undefined) return;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var cell = $('#' + idOfCell(i + 1, j + 1));
            cell.attr('data-minesweeper', document.grid[i][j]);
            cell.value = document.grid[i][j];
        }
    }
}

function reveal(row, col) {
    var cell = $('#' + idOfCell(row, col));
    if (cell.attr('data-minesweeper') == 'bomb') {
        cell.addClass('lost');
    }
    else {
        cell.addClass('safe');
        cell.html(bombsAround(row,col));
    }
}

function bombsAround(row,col) {
    var coordinatesAround = [
        [-1,-1], [-1,0], [-1,1],
        [ 0,-1],         [ 0,1],
        [ 1,-1], [ 1,0], [ 1,1]
    ];

    var sum = 0;
    for(var i = 0; i < coordinatesAround.length; i++){
        var cell = $('#' + idOfCell(row + coordinatesAround[i][0], col + coordinatesAround[i][1]));
        if (cell.attr('data-minesweeper') == 'bomb') {
            sum++;
        }
    }
    return sum;
}

var module = module || {};
module.exports = Board;