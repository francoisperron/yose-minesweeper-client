/*global describe, beforeEach, afterEach, it, expect, spyOn, jasmine */
var $ = require('jquery');
var Board = require('../board');

describe('Data injection', function () {

    var board = new Board();

    beforeEach(function () {
        $('body').append('<div id="board"/>');
        board.render();
    });

    it('loads a grid on the board', function () {
        var grid =
            [
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
            ];
        board.load(grid);

        expect($('#cell-3x6').attr('data-minesweeper')).toEqual('bomb');
        expect($('#cell-3x5').attr('data-minesweeper')).toEqual('empty');
    });

});