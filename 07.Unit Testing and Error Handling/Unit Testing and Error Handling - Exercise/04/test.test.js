const { assert } = require('chai');
const mathEnforcer = require('./04.MathEnforcer');

describe('mathEnforcer object', () => {
    it('AddFive should add correct', () => {
        assert.equal(mathEnforcer.addFive(10), 15);
        assert.equal(mathEnforcer.addFive(-10), -5);
        assert.equal(mathEnforcer.addFive(0.1), 5.1);
    });
    it('AddFive should add return undefined', () => {
        assert.isUndefined(mathEnforcer.addFive('string'));
        assert.isUndefined(mathEnforcer.addFive([1]));
        assert.isUndefined(mathEnforcer.subtractTen([1, 2]));
        assert.isUndefined(mathEnforcer.subtractTen({}));

    });
    it('Substract should substract correct', () => {
        assert.equal(mathEnforcer.subtractTen(10), 0);
        assert.equal(mathEnforcer.subtractTen(-10), -20);
        assert.equal(mathEnforcer.subtractTen(0.1), -9.9);
    });
    it('Substract should return undefined', () => {
        assert.isUndefined(mathEnforcer.subtractTen('string'));
        assert.isUndefined(mathEnforcer.subtractTen([1]));
        assert.isUndefined(mathEnforcer.subtractTen([1, 2]));
        assert.isUndefined(mathEnforcer.subtractTen({}));
    });
    it('Sum should return undefined', () => {
        assert.isUndefined(mathEnforcer.sum('string', 'anotherString'));
        assert.isUndefined(mathEnforcer.sum(1, 'anotherString'));
        assert.isUndefined(mathEnforcer.sum('string', 1));
    });
    it('Sum should added to numbers', () => {
        assert.equal(mathEnforcer.sum(20, 30), 50);
        assert.equal(mathEnforcer.sum(-1, 2), 1);
        assert.equal(mathEnforcer.sum(1, -2), -1);
        assert.equal(mathEnforcer.sum(-1, -2), -3);
        assert.equal(mathEnforcer.sum(0.22222223, 0.233333), 0.45555523);
    });
});