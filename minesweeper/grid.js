function Grid() {
}

Grid.prototype.generate = function () {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board.push([]);
        for (var j = 0; j < 8; j++) {
            board[i].push(bombOrEmpty());
        }
    }
    return board;
};
function bombOrEmpty() {
    return Math.random() > 0.9 ? 'bomb' : 'empty';
}

var module = module || {};
module.exports = Grid;