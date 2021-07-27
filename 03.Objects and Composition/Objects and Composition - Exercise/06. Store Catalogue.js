function storeCatalogue(input) {
    const products = {};
    for (const product of input.sort()) {
        const [name, price] = product.split(' : ');
        let firstLetter = name[0];

        if (!products[firstLetter]) {
            products[firstLetter] = [];
        }
        products[firstLetter].push({ name, price: Number(price) })

    }

    let result = [];

    Object.entries(products).forEach(entry => {
        let values = entry[1]
            .map(item => `  ${item.name}: ${item.price}`)
            .join('\n');

        let string = `${entry[0]}\n${values}`;
        result.push(string);
    })
    return result.join('\n');
}

console.log(storeCatalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
))