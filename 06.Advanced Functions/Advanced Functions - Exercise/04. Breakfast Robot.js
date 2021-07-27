function breakfastRobot() {
    const restockProduct = {
        carbohydrates: 0, flavour: 0, protein: 0, fat: 0
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const action = {
        restock: (microelement, quantity) => {
            restockProduct[microelement] += quantity
            return `Success`;
        },
        prepare: (product, quantity) => {
            const ingredients = Object.keys(recipes[product]);

            for (const ingredian of ingredients) {
                if (restockProduct[ingredian] < recipes[product][ingredian] * quantity) {
                    return `Error: not enough ${ingredian} in stock`;
                }
            }

            ingredients.forEach((ingredian) => {
                restockProduct[ingredian] -= recipes[product][ingredian] * quantity;
            });

            return 'Success';
        },
        report: () => {
            return Object.keys(restockProduct)
                .reduce((a, c) => {
                    a.push(`${c}=${restockProduct[c]}`);
                    return a;
                }, [])
                .join(' ');
        },
    };

    return function (cmds) {
        let [command, product, quantity] = cmds.split(' ');
        quantity = Number(quantity);
        return action[command](product, quantity);
    };
}

const manager = breakfastRobot();
console.log(manager('restock carbohydrates 10 '));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10 '));
console.log(manager('prepare burger 1 '));
console.log(manager('report'));