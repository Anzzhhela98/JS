function solve(name, population, treasury) {
    const cityRecord = {
        name: name,
        population: population,
        treasury: treasury
    }

    return cityRecord
}

console.log(solve(
    'Tortuga',
    7000,
    15000))

function cityRecord(city, population, treasury) {
    return { name: city, population, treasury };

}

console.log(cityRecord(
    'Tortuga',
    7000,
    15000))