const { assert } = require('chai');
const isOddOrEven = require('./02.EvenOrOdd');

describe('isOddOrEven function', () => {
    it('return undefined invalid input', () => {
        assert.isUndefined(isOddOrEven(2));
    });
    it('return odd if input lenght is odd', () => {
        assert.equal(isOddOrEven('yes'), 'odd');
    });
    it('return even if input lenght is even', () => {
        assert.equal(isOddOrEven('yessss'), 'even');
    });
})