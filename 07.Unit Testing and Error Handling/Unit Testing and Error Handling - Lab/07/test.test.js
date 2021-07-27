const { expect } = require('chai');
const createCalculator = require('./07.addSubstract');

describe('Testing createCalculator functionality', () => {
    let calc = '';
    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 0 for get', () => {
        expect(calc.get()).to.be.equal(0);
    });
    
    it('should return 2 after add(1); add(1)', () => {
        calc.add(1);
        calc.add(1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });
    it('should return -2 after subtract(1); subtract(1)', () => {
        calc.subtract(1);
        calc.subtract(1);
        let value = calc.get();
        expect(value).to.be.equal(-2);
    });
    it('should return 5 after add(10); subtract(5)', () => {
        calc.add(10);
        calc.subtract(5);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it('should return NaN for add(string)', () => {
        calc.add('Hello');
        expect(calc.get()).to.be.NaN;
    });
    it('should return NaN for subtract(string)', () => {
        calc.subtract('Hello');
        expect(calc.get()).to.be.NaN;
    });
    it("should return 6 after add(10); subtract('2'); add('2'); subtract(4)", function () {
        calc.add(10);
        calc.subtract('2');
        calc.add('2');
        calc.subtract(4);
        let value = calc.get();
        expect(value).to.be.equal(6);
    });
});