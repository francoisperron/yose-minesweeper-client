function Board() {
}

Board.prototype.render = function () {
    for (var i = 1; i < 9; i++) {
        $('#board').append('<tr></tr>');
        for (var j = 1; j < 9; j++) {
            $('#board tr:last').append('<td id="cell-'+i+'x'+j+'"></td>');
        }
    }
};