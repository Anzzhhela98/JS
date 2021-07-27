class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        let subscriber = this.subscribers.find((s) => s.name == name);
        let index = this.subscribers.indexOf(subscriber);

        if (!this.subscriptionTypes.hasOwnProperty(type)) {
            throw new Error(`The type ${type} is invalid`);
        }
        if (index < 0) {
            let subscriber = {
                name,
                type,
                books: []
            }
            this.subscribers.push(subscriber);
        } else {
            this.subscribers[index].type = type;
        }

        return this.subscribers[index];
    }

    unsubscribe(name) {
        let subscriber = this.subscribers.find((s) => s.name == name);
        let index = this.subscribers.indexOf(subscriber);

        if (index < 0) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(index, 1);
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriber = this.subscribers.find((s) => s.name == subscriberName);
        let index = this.subscribers.indexOf(subscriber);

        if (index < 0) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        let limit = this.subscriptionTypes[subscriber.type];
        if (subscriber.books.length >= limit) {
            throw new Error(`You have reached your subscription limit ${limit}!`);
        }

        this.subscribers[index].books.push({ bookTitle, bookAuthor });
        return this.subscribers[index];
    }

    showInfo() {
        if (!this.subscribers.length) {
            return `${this.libraryName} has no information about any subscribers`
        }

        let result = [];
        let books = [];
        this.subscribers.forEach((s) => {
            result.push(`Subscriber: ${s.name}, Type: ${s.type}`)
            s.books.forEach((b) => {
                books.push(`${b.bookTitle} by ${b.bookAuthor}`)
            });
            result.push(`Received books: ${books.join(', ')}`);
        });

        return result.join('\n');
    }
}

let lib = new Library('Lib');
lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());