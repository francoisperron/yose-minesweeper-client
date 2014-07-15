var $ = $ || require('jquery');

function Board() {
}

Board.prototype.render = function () {
    var board = $('#board');
    for (var i = 1; i < 9; i++) {
        board.append('<tr></tr>');
        for (var j = 1; j < 9; j++) {
            board.find('tr:last').append('<td id="cell-'+i+'x'+j+'"></td>');
        }
    }
};

var module = module || {};
module.exports = Board;