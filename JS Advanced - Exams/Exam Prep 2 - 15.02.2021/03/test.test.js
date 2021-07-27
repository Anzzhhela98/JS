const { assert } = require('chai');
const dealership = require('./03.Dealership.js');

describe('Dealer Ship Testing', () => {
    it('New CarCost', () => {
        assert.equal(dealership.newCarCost('Audi A4 B8', 100000), 85000);
        assert.equal(dealership.newCarCost('B', 1), 1);
    });

    it('Car Equipment', () => {
        assert.deepEqual(dealership.carEquipment(
            ['a', 'b', 'c', 'd'], []), []);

        assert.deepEqual(dealership.carEquipment(
            ['a', 'b', 'c', 'd'], [0, 2, 3]), ['a', 'c', 'd']);
    });

    it('Euro Category', () => {
        assert.equal(dealership.euroCategory(3),
            'Your euro category is low, so there is no discount from the final price!');

        assert.equal(dealership.euroCategory(4),
            `We have added 5% discount to the final price: 14250.`);

        assert.equal(dealership.euroCategory(5),
            `We have added 5% discount to the final price: 14250.`)
    });
});