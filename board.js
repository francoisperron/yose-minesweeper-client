var $ = $ || require('jquery');

function Board() {
}

Board.prototype.render = function () {
    var board = $('#board');
    for (var i = 1; i < 9; i++) {
        board.append('<tr></tr>');
        for (var j = 1; j < 9; j++) {
            var id = 'cell-'+i+'x'+j;
            board.find('tr:last').append('<td id="'+id+'" onClick=reveal("'+id+'")></td>');
        }
    }
};

function load(){
    if (document.grid == undefined) return;

    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            var row = i + 1;
            var col = j + 1;
            var id = 'cell-'+row+'x'+col;
            $('#'+id).attr('data-minesweeper', document.grid[i][j]);
            $('#'+id).value = document.grid[i][j];
        }
    }
}

function reveal(id){
    var cell = $('#'+id);
    if(cell.attr('data-minesweeper') == 'bomb'){
        cell.addClass('lost');
    }
}

var module = module || {};
module.exports = Board;