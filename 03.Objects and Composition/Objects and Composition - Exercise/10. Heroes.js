function solve() {
    return {
        fighter(name) {
            return {
                name: name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                },
            };
        },
        mage(name) {
            return {
                name: name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`)
                }
            };
        },
    }

};