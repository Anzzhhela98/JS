const pizzUni = require('./03.PizzaPlace.js');
const { assert } = require('chai');

describe('Testing PizzUni Class', function() {

    it('Order Pizza', () => {
        const firstPizza = { orderedPizza: 'Margarita', orderedDrink: 'Fanta' };
        const secondPizza = { orderedPizza: 'Capricioza' };
        const thirdPizza = { orderedDrink: 'Nestea' };
        const fourthPizza = {};

        assert.equal(
            pizzUni.makeAnOrder(firstPizza),
            `You just ordered ${firstPizza.orderedPizza} and ${firstPizza.orderedDrink}.`
        );

        assert.equal(
            pizzUni.makeAnOrder(secondPizza),
            `You just ordered ${secondPizza.orderedPizza}`
        );

        assert.throws(() =>
            pizzUni.makeAnOrder(thirdPizza),
            'You must order at least 1 Pizza to finish the order.'
        );

        assert.throws(() =>
            pizzUni.makeAnOrder(fourthPizza),
            'You must order at least 1 Pizza to finish the order.'
        );
    });

    it('Get Remaining Work', () => {

        let firstPizzas = [{ pizzaName: 'Margarita', status: 'preparing' }, { pizzaName: 'Capricioza', status: 'preparing' }]
        let pizzaNames = ['Margarita', 'Capricioza'].join(', ');
        assert.equal(
            pizzUni.getRemainingWork(firstPizzas),
            `The following pizzas are still preparing: ${pizzaNames}.`
        );

        let secondPizzas = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Capricioza', status: 'ready' }];
        assert.equal(
            pizzUni.getRemainingWork(secondPizzas),
            'All orders are complete!'
        );
    });
    it('order Type', () => {

        assert.equal(
            pizzUni.orderType(100, 'Carry Out'), 90
        );
        assert.equal(
            pizzUni.orderType(100, 'Delivery'), 100
        );
    })
})