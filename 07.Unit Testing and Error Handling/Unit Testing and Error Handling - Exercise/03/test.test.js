const { assert } = require('chai');
const lookupChar = require('./03.CharLookup');

describe('lookupChar function', () => {
    it('return undefined invalid string type', () => {
        assert.isUndefined(lookupChar(2, 2));
    });
    it('return undefined invalid index type', () => {
        assert.isUndefined(lookupChar('Hello', 'Hello'));
    });
    it('return undefined if both string and index are invalid type', () => {
        assert.isUndefined(lookupChar(2, 'Hello'));
    });
    it('return "Incorrect" if lenght of string is less than index', () => {
        assert.equal(lookupChar('yes', 4), "Incorrect index");
    });
    it('return "Incorrect" if index is less than zero', () => {
        assert.equal(lookupChar('yes', -2), "Incorrect index");
    });
    it('return "Incorrect" if index is invalid', () => {
        assert.equal(lookupChar('y', 1), "Incorrect index");
    });
    it('return correct  answear', () => {
        assert.equal(lookupChar('yes', 2), "s");
    });
});