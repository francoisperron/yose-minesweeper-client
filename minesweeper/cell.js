var $ = $ || require('jquery');

function Cell(row, col) {
    this.row = row;
    this.col = col;
}

Cell.prototype.render = function () {
    return '<td id="' + this.id() + '" class="unknown" onClick=board.reveal(' + this.row + ',' + this.col + ')></td>';
};


Cell.prototype.load = function (val) {
    this.element().attr('data-minesweeper', val);
};

Cell.prototype.reveal = function () {
    var element = this.element();
    element.removeClass('unknown');
    if (element.attr('data-minesweeper') == 'bomb') {
        element.addClass('lost');
    }
    else {
        element.addClass('safe');
        var nbBombs = this.bombsAround();
        element.html(nbBombs == 0 ? '' : nbBombs);
    }
}

Cell.prototype.bombsAround = function () {
    var coordinatesAround = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [ 0, -1],
        [ 0, 1],
        [ 1, -1],
        [ 1, 0],
        [ 1, 1]
    ];

    var sum = 0;
    for (var i = 0; i < coordinatesAround.length; i++) {
        var cell = new Cell(this.row + coordinatesAround[i][0], this.col + coordinatesAround[i][1]).element();
        if (cell.attr('data-minesweeper') == 'bomb') {
            sum++;
        }
    }
    return sum;
}

Cell.prototype.id = function () {
    return 'cell-' + this.row + 'x' + this.col;
};

Cell.prototype.element = function () {
    return $('#' + this.id());
};


var module = module || {};
module.exports = Cell;