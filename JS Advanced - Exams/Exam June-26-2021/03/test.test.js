const testNumbers = require('./testNumbers.js');
const { assert } = require('chai');

describe('testNumbers object', () => {

    it('sumNumbers shold return undefined if input is NaN  ', () => {
        assert.equal(testNumbers.sumNumbers('two', 2), undefined);
        assert.equal(testNumbers.sumNumbers('two', 'one'), undefined);
        assert.equal(testNumbers.sumNumbers(2, 'four'), undefined);
        assert.equal(testNumbers.sumNumbers(2, []), undefined);
        assert.equal(testNumbers.sumNumbers({}, 0), undefined);
    });
    it('sumNumbers should return addition of two numbers', () => {
        assert.equal(testNumbers.sumNumbers(1, 2), 3.00);
        assert.equal(testNumbers.sumNumbers(1.1, 2), 3.10);
        assert.equal(testNumbers.sumNumbers(1.10, 2000), 2001.1);
    });

    it('numberChecker should throw Eror', () => {
        assert.throws(() => testNumbers.numberChecker('string'), 'The input is not a number!');
        assert.throws(() => testNumbers.numberChecker('Tanq Ivanowa'), 'The input is not a number!');
        // assert.throws(() => testNumbers.numberChecker([]), 'The input is not a number!');
        // assert.throws(() => testNumbers.numberChecker({}), 'The input is not a number!');
    });
    it('numberChecker should return "Even number', () => {
        assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        assert.equal(testNumbers.numberChecker(0), 'The number is even!');
        assert.equal(testNumbers.numberChecker(100), 'The number is even!');
    });
    it('numberChecker should return "Odd number', () => {
        assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        assert.equal(testNumbers.numberChecker(15), 'The number is odd!');
        assert.equal(testNumbers.numberChecker(10.10), 'The number is odd!');
    });

    it('averageSumArray should return average of given array', () => {
        let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let secondArray = [0, 10, 3.5, 4, 7.99, 6, 6.32, 8, 1000, 10];
        let thirdArray = [0, -10, 3.5, -4, ];
        assert.equal(testNumbers.averageSumArray(firstArray), 5.5)
        assert.equal(testNumbers.averageSumArray(secondArray), 105.58099999999999)
        assert.equal(testNumbers.averageSumArray(thirdArray), -2.625)
    });
})

// averageSumArray: function(arr) {
//     let arraySum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         arraySum += arr[i]
//     }

//     return arraySum / arr.length
// }