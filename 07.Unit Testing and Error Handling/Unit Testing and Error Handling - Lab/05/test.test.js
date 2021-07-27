const isSymmetric = require('./05.CheckForSymmetry');
const { expect } = require('chai');

describe('symmetric function', () => {
    it('returns false symmetric input', () => {
        expect(isSymmetric('stringy')).to.false;
    });
    it('returns true symmetric input', () => {
        expect(isSymmetric([1, 1])).to.true;
    });
    it('returns true for odd number in input', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    });
    it('returns false for different type of values', () => {
        expect(isSymmetric(['1', 1])).to.false;
    });
    it('returns true for non-numeric values', () => {
        expect(isSymmetric(['a', 'a', 'a'])).to.true;
    });
    it('returns false for non-numeric values', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.true;
    });
});