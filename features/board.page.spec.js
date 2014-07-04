/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('Board page', function () {

    var browser = new Browser();
    var boardPage = 'http://localhost:5002/board.html';

    it('displays the title Minesweeper', function (done) {
        browser.visit(boardPage).then(function () {
            expect(browser.text('#title')).toEqual('Minesweeper');
            done();
        });
    });

    it('displays a 8 by 8 grid', function (done) {
        browser.visit(boardPage).then(function () {
            for (var i = 1; i < 9; i++) {
                for (var j = 1; j < 9; j++) {
                    expect(browser.queryAll('#cell-'+i+'x'+j).length).toEqual(1);
                }
            }
            done();
        });
    });
});