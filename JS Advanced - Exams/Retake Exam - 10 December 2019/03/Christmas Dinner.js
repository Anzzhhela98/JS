class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping(product) {
        let [item, price] = product
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(item);
        this._budget -= price;
        return `You have successfully bought ${item}!`;
    }

    recipes(recipe) {
        const productsList = recipe.productsList;
        const recipeName = recipe.recipeName;

        productsList.forEach((p) => {
            if (!this.products.includes(p)) {
                throw new Error("We do not have this product");
            }
        });

        this.dishes.push({ recipeName, productsList })
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        const currDish = this.dishes.find((r) => r.recipeName == dish);
        const indexDish = this.dishes.indexOf(currDish);

        if (indexDish < 0) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (const name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find((el) => el.recipeName == dish)
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n').trimEnd();
    }
}