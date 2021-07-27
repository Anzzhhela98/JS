const sum = require('./04.sumOfNumbers');
const { expect } = require('chai');

describe('Sum function', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });

    it('sums mutiple number', () => {
        expect(sum([1, 1])).to.equal(2);
    });

    it('sums string numbers', () => {
        expect(sum(['2', '2'])).to.equal(4);
    });
});