/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('Random grid', function () {

    var browser = new Browser();
    var boardPage = 'http://localhost:5002/minesweeper/board.html';

    it('is generated on each page load', function (done) {
        browser.visit(boardPage).then(function () {
            var grid = browser.document.grid;
            browser.visit(boardPage).then(function () {
                expect(browser.document.grid).not.toEqual(grid);
                done();
            });
        });
    });
});