function cityRecord(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyRecession(percent) {
            this.population += Math.floor(this.population * percent / 100)
        },
        applyGrowth(percent) {
            this.treasury -= Math.ceil(this.treasury * percent / 100)
        },
    };

    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000));
const result = cityRecord('Tortuga', 7000, 15000);
result.applyGrowth(10);
result.collectTaxes();
result.applyRecession(30);
console.log(result.treasury)
console.log(result.population)
console.log(result.population)