function population(array) {

    const towns = {};
    for (const townAsString of array) {
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
population(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ])