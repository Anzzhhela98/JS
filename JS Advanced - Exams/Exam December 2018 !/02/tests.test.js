const { Warehouse } = require('./solution.js');
const { assert } = require('chai');


describe('Warehouse Tests', () => {
    let warehouse = '';
    beforeEach(() => {
        warehouse = new Warehouse(20);
    });
    it('Set Capacity should throw Error => Invalid given warehouse space', () => {
        assert.throws(() => warehouse = new Warehouse(-1), 'Invalid given warehouse space')
    });
    it('Get Capacity should return correct', () => {
        assert.equal(warehouse.capacity, 20)
    });

    it('Add Product sholud add correct', () => {
        assert.equal(warehouse.addProduct('Food', 'Banana', 10),
            warehouse.availableProducts['Food'])
    });
    it('Add Product sholud add correct when capacity eaqual to zero', () => {
        warehouse.addProduct('Drink', 'Water', 10)
        assert.equal(warehouse.addProduct('Food', 'Banana', 10),
            warehouse.availableProducts['Food'])
    });
    it('Add Product sholud throw Error => There is not enough space or the warehouse is already full', () => {
        warehouse.addProduct('Food', 'Banana', 10)
        assert.throws(() => warehouse.addProduct('Food', 'Banana', 11),
            'There is not enough space or the warehouse is already full')
    });

    it('Order Products should Sorts all products of a given type in descending order by the quantity', () => {
        warehouse.addProduct('Drink', 'Water', 10)
        warehouse.addProduct('Food', 'Banana', 5),
            warehouse.addProduct('Food', 'Pineaple', 5)
        assert.equal(warehouse.orderProducts('Food'), warehouse.availableProducts['Food'])

    });
    it('Order Products should Sorts all products of a given type in descending order by the quantity', () => {
        warehouse.addProduct('Drink', 'Water', 10)
        warehouse.addProduct('Drink', 'Pineaple Juice', 5)
        assert.equal(warehouse.orderProducts('Drink'), warehouse.availableProducts['Drink'])

    });

    it('Occupied Capacity Returns a number, which represents the already occupied place in the warehouse. ', () => {
        warehouse.addProduct('Drink', 'Pineaple Juice', 5),
            warehouse.addProduct('Food', 'Banana', 5),
            assert.equal(warehouse.occupiedCapacity(), 10)
    });
    it('Occupied Capacity Returns a number, which represents the already occupied place in the warehouse. ', () => {
        assert.equal(warehouse.occupiedCapacity(), 0)
    });
    it('Occupied Capacity Returns a number, which represents the already occupied place in the warehouse. ', () => {
        warehouse.addProduct('Drink', 'Pineaple Juice', 10),
            warehouse.addProduct('Food', 'Banana', 10),
            assert.equal(warehouse.occupiedCapacity(), 20)
    });

    it('revision if warehouse is empty', () => {
        assert.equal(warehouse.revision(), 'The warehouse is empty');
    });
    it('revision returns string  which represents the already occupied place in the warehouse', () => {
        warehouse.addProduct('Drink', 'Water', 5),
            warehouse.addProduct('Food', 'Banana', 10),
            assert.equal(warehouse.revision(), 'Product type - [Food]\n- Banana 10\nProduct type - [Drink]\n- Water 5');
    });

    it('Scrape A Product reduce quantity', () => {
        warehouse.addProduct('Food', 'Banana', 10),
            assert.equal(warehouse.scrapeAProduct('Banana', 2), warehouse.availableProducts['Food']);
        assert.equal(warehouse.scrapeAProduct('Banana', 10), warehouse.availableProducts['Food']);
    });
})