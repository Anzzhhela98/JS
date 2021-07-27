const numberOperations = require('./03.Number');
const { assert } = require('chai');

describe('numberOperations', function() {
    it('powNumber', () => {
        assert.equal(numberOperations.powNumber(3), 9)
        assert.equal(numberOperations.powNumber(1), 1)
        assert.equal(numberOperations.powNumber(0), 0)
    });

    it('numberChecker', () => {
        assert.throws(() => numberOperations.numberChecker('STrign'), 'The input is not a number!')
        assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(' '), 'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
    });

    it('sumArrays', () => {
        assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4, 4]), [4, 6, 4]);
        assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [3, 4, 3]), [4, 6, 6]);

        assert.deepEqual(numberOperations.sumArrays([1], [3])[4]);
        assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 2]), [4, 4]);
        assert.deepEqual(numberOperations.sumArrays([1000, 3000], [1000, 5000]), [2000, 8000]);
    });
});