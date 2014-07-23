/*global describe, beforeEach, afterEach, it, expect, spyOn, jasmine */
var $ = require('jquery');
var Board = require('../board');

describe('Open field', function () {

    var board = new Board();

    beforeEach(function () {
        $('body').append('<div id="board"/>');
        board.render();
    });

    it('reveals all cells without a bomb around on click', function () {
        var grid =
            [
                ['bomb' , 'empty', 'empty'],
                ['empty', 'empty', 'empty'],
                ['empty', 'empty', 'bomb' ]
            ];
        board.load(grid);
        board.reveal(3,1);

        expect($('#cell-3x1').attr('class')).toEqual('safe');
        expect($('#cell-2x2').attr('class')).toEqual('safe');
        expect($('#cell-3x2').attr('class')).toEqual('safe');
    });
});
