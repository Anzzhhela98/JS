class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {}
        this.actionsHistory = []
    }
    loadProducts(products) {
        let messageLog = []
        for (let entry of products) {
            entry = entry.split(' ')

            let price = +entry.pop()
            let quantity = +entry.pop()
            let product = entry.join(' ')
            if (this.budget - price >= 0) {
                if (this.productsInStock[product]) this.productsInStock[product] += quantity
                else this.productsInStock[product] = quantity
                this.budget -= price
                messageLog.push(`Successfully loaded ${quantity} ${product}`)
            } else {
                messageLog.push(`There was not enough money to load ${quantity} ${product}`)
            }
        }

        this.actionsHistory = [...this.actionsHistory, ...messageLog]
        return this.actionsHistory.join('\n')

    }
    addToMenu(meal, neededIngs, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: neededIngs,
                price: +price
            }
            let printMeal = Object.keys(this.menu).length > 1 ? 'meals' : 'meal'
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} ${printMeal} in the menu, other ideas?`
        } else return `The ${meal} is already in the our menu, try something different.` 

    }
    showTheMenu() {
        let toPrint = []
        for (let key of Object.keys(this.menu)) {
            toPrint.push(`${key} - $ ${this.menu[key].price}`)
        }
        if (!toPrint.length) return ('Our menu is not ready yet, please come later...') //test 8 pass
        else {
            return toPrint.join('\n') + '\n'.trimEnd()
        }

    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) return (`There is not ${meal} yet in our menu, do you want to order something else?`)

        let ingredientsNeeded = this.menu[meal].products
        for (let item of ingredientsNeeded) {
            item = item.split(' ')
            let quantity = +item.pop()
            let product = item.join(' ')

            if (this.productsInStock[product] < quantity || !this.productsInStock[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`) // test 15
            }
        }

        for (let item of ingredientsNeeded) {
            item = item.split(' ')
            let quantity = +item.pop()
            let product = item.join(' ')
            this.productsInStock[product] -= quantity
        }
        this.budget += this.menu[meal].price
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`) //test 13 pass
    }
}