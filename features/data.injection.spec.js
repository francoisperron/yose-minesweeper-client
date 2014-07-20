/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('Data injection', function () {

    var browser = new Browser();
    var boardPage = 'http://localhost:5002/board.html';

    xit('loads document.grid on the board on load()', function (done) {
        browser.visit(boardPage).then(function () {
            browser.document.grid =
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
            browser.evaluate('load()');
            console.log(browser.html('#cell-3x6'));
            expect(browser.query('#cell-3x6').attr('data-minesweeper')).toEqual('bomb');
            done();
        });
    });

    it('sets the cell class to lost when a bomb is clicked', function (done) {
            browser.visit(boardPage).then(function () {
                browser.document.grid =
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
                browser.evaluate('load()');
                browser.click('#cell-3x6');
                expect(browser.queryAll('.lost').length).toEqual(1);
//                expect(browser.query('#cell-3x6').attr('class')).toEqual('lost');
                done();
            });
        });
});