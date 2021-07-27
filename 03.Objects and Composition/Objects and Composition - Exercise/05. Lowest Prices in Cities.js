function lowestPriceInCities(input) {
    let storage = {};
    for (const data of input) {
        let [town, product, stringPrice] = data.split(' | ');
        let price = Number(stringPrice);

        if (storage[product]) {
            storage[product] =
                storage[product].price <= price ? storage[product] : { town, price: price };
        } else {
            storage[product] = { town, price: price }
        }
    };

    for (const product in storage) {
        console.log(`${product} -> ${storage[product].price} (${storage[product].town})`)
    };

}

lowestPriceInCities(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'
    ]);

// Audi -> 100000 (Sofia City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)