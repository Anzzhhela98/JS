class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const car = this.findCar(carNumber)
        const index = this.vehicles.indexOf(car);

        if (index < 0) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        const car = this.findCar(carNumber);
        const index = this.vehicles.indexOf(car);

        if (index < 0) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        this.vehicles[index].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    findCar(carNumber) {
        return this.vehicles.find((x) => x.carNumber == carNumber);
    }

    getStatistics(carNumber) {
        let result = [];
        const sorted = {
            alphabeticaly: (a, b) => a.carModel.localeCompare(b.carModel)
        }
        const car = this.findCar(carNumber);
        if (carNumber) {
            return `${car.carModel} == ${car.carNumber} - ${car.payed == true ? "Has payed" : "Not payed"}`;
        }

        result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
        this.vehicles
            .sort(sorted['alphabeticaly'])
            .forEach((c) => {
                result.push(`${c.carModel} == ${c.carNumber} - ${c.payed == true ? "Has payed" : "Not payed"}`);
            })
        return result.join('\n').trim();
    }
}

const parking = new Parking(12);
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));