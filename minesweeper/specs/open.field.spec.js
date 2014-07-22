/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('Open field', function () {

    var browser = new Browser();
    var boardPage = 'http://localhost:5002/minesweeper/board.html';

    it('reveals all cells without a bomb around on click', function (done) {
        browser.visit(boardPage).then(function () {
            browser.document.grid =
                [
                    ['bomb' , 'empty', 'empty'],
                    ['empty', 'empty', 'empty'],
                    ['empty', 'empty', 'bomb' ]
                ];
            browser.evaluate('load()');
            browser.click('#cell-3x1');
            expect(browser.query('#cell-3x1').getAttribute('class')).toEqual('safe');
            expect(browser.query('#cell-2x2').getAttribute('class')).toEqual('safe');
            expect(browser.query('#cell-3x2').getAttribute('class')).toEqual('safe');
            done();
        });
    });
});