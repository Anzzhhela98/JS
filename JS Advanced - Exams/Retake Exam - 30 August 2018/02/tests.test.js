const { HolidayPackage } = require('./solution.js');
const { assert } = require('chai');

describe('', () => {
    let holidayPackage = '';
    beforeEach(() => {
        holidayPackage = new HolidayPackage('Alaska', 'Winter');
    });

    it('showVacationers should return message =>...', () => {
        holidayPackage.addVacationer('Lili Lensun');
        assert.equal(holidayPackage.showVacationers(), `Vacationers:\n${holidayPackage.vacationers.join("\n")}`);
    });
    it('showVacationers should return message =>...', () => {
        holidayPackage.addVacationer('Lili Lensun');
        holidayPackage.addVacationer('Zun Mun');
        assert.equal(holidayPackage.showVacationers(), `Vacationers:\n${holidayPackage.vacationers.join("\n")}`);
    });
    it('showVacationers should return message =>"No vacationers are added yet" ', () => {
        assert.equal(holidayPackage.showVacationers(), "No vacationers are added yet");
    });

    it('addVacationer should add correct', () => {
        holidayPackage.addVacationer('Lili Lensun')
        assert.equal(holidayPackage.vacationers.length, 1); //?
        assert.equal(holidayPackage.vacationers.includes('Lili Lensun'), true); //?
    });
    it('addVacationer should throw new Error => Name must consist of first name and last name', () => {
        assert.throws(() => holidayPackage.addVacationer('Lili'),
            "Name must consist of first name and last name");
        assert.throws(() => holidayPackage.addVacationer('Lili Sini Simi'),
            "Name must consist of first name and last name");
    });
    it('addVacationer should throw new Error => Vacationer name must be a non-empty string', () => {
        assert.throws(() => holidayPackage.addVacationer(' '),
            'Vacationer name must be a non-empty string');

        assert.throws(() => holidayPackage.addVacationer(2020),
            'Vacationer name must be a non-empty string');
    });


    it('get insuranceIncluded', () => {
        assert.equal(holidayPackage.insuranceIncluded, false)
    });
    it('set insuranceIncluded', () => {
        holidayPackage.insuranceIncluded = true;
        assert.equal(holidayPackage.insuranceIncluded, true)
    });
    it('set insuranceIncluded should throw Exception', () => {
        assert.throws(() => holidayPackage.insuranceIncluded = 'Didi', "Insurance status must be a boolean");
    });

    it('Generate Holiday Package  shold throw Error', () => {
        assert.throws(() => holidayPackage.generateHolidayPackage(), "There must be at least 1 vacationer added");
    });
    it('Generate Holiday Package ', () => {
        holidayPackage.addVacationer('Lili Linusun');
        holidayPackage.addVacationer('Zun Mun');
        assert.equal(holidayPackage.generateHolidayPackage(),
            "Holiday Package Generated\n" +
            "Destination: " + 'Alaska' + "\n" +
            holidayPackage.showVacationers() + "\n" +
            "Price: " + 1000)
    });
    it('Generate Holiday Package in Italy, Summer plus insuranceIncluded =>700 price', () => {
        let holidayPackage = new HolidayPackage('Italy', 'Summer')
        holidayPackage.addVacationer('Lili Linsun');
        holidayPackage.insuranceIncluded = true;
        assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\n" +
            "Destination: " + 'Italy' + "\n" +
            holidayPackage.showVacationers() + "\n" +
            "Price: " + 700);
    });
});