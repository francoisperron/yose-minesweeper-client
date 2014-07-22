/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('Data injection', function () {

    var browser = new Browser();
    var boardPage = 'http://localhost:5002/minesweeper/board.html';

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

    it('sets the cell class to safe when an empty cell is clicked', function (done) {
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
            browser.click('#cell-3x5');
            expect(browser.queryAll('.safe').length).toEqual(1);
            expect(browser.text('#cell-3x5')).toEqual('1');
            done();
        });
    });

    it('sets the cell text to nothing when an empty cell without surrounding bombs is clicked', function (done) {
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
                browser.click('#cell-1x1');
                expect(browser.text('#cell-1x1')).toEqual('');
                done();
            });
        });
});