function carFactory(objectCar) {
    const storageEngine = {
        90: {
            power: 90,
            volume: 1800,
        },
        120: {
            power: 120,
            volume: 2400,
        },
        200: {
            power: 200,
            volume: 3500,
        }
    }

    const car = {
        model: objectCar.model,
        engine: determineEngine(objectCar.power),
        carriage: {
            type: objectCar.carriage,
            color: objectCar.color,
        },
        wheels: new Array(4)
            .fill(objectCar.wheelsize % 2 === 0 ?
                objectCar.wheelsize - 1 :
                objectCar.wheelsize
            ),
    }

    function determineEngine(power) {
        for (const engine in storageEngine) {
            if (power <= engine) {
                return storageEngine[engine];
            }
        }
    }

    return car
}

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));