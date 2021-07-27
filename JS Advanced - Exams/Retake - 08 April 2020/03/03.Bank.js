class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        this.allCustomers.find((c) => {
            if (c.personalId == customer.personalId) {
                throw new Error(
                    `${customer.firstName} ${customer.lastName} is already our customer!`
                );
            }
        })
        this.allCustomers.push(customer);
        return customer
    }

    depositMoney(personalId, amount) {
        let person = this.allCustomers.find((c) => c.personalId == personalId);
        let indexOfPerson = this.allCustomers.indexOf(person);

        if (indexOfPerson < 0) {
            throw new Error(
                "We have no customer with this ID!");
        }

        if (this.allCustomers[indexOfPerson].hasOwnProperty('totalMoney')) {
            this.allCustomers[indexOfPerson].totalMoney += amount;
        } else {
            this.allCustomers[indexOfPerson].totalMoney = amount;
            this.allCustomers[indexOfPerson].transactionInfos = [];
        }
        let message = `${person.transactionInfos.length + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`
        this.allCustomers[indexOfPerson].transactionInfos.push(message);
        return `${this.allCustomers[indexOfPerson].totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.find((c) => c.personalId == personalId);
        let indexOfPerson = this.allCustomers.indexOf(person);

        if (indexOfPerson < 0) {
            throw new Error(
                "We have no customer with this ID!");
        }

        if (person.hasOwnProperty('totalMoney') && person.totalMoney < amount) {
            throw new Error(
                `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }

        this.allCustomers[indexOfPerson].totalMoney -= amount;
        let message = `${person.transactionInfos.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`;
        this.allCustomers[indexOfPerson].transactionInfos.push(message);
        return `${this.allCustomers[indexOfPerson].totalMoney}$`;
    }

    customerInfo(personalId) {
        let person = this.allCustomers.find((c) => c.personalId == personalId);
        let indexOfPerson = this.allCustomers.indexOf(person);
        person.transactionInfos.reverse();
        if (indexOfPerson < 0) {
            throw new Error(
                "We have no customer with this ID!");
        }
        let result = [];

        result.push(`Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}$\nTransactions:\n${person.transactionInfos.join('\n')}`)

        return result.join().trim();
    }
}