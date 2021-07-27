const { assert } = require('chai');
const { BookStore } = require('./solution.js');

describe('BookStore Testing', () => {
    let bookStore = '';
    let books = [];
    beforeEach(() => {
        bookStore = new BookStore('Orange');
        books = ['Love', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'];
    });

    it('StockBooks return array with Books', () => {
        assert.deepEqual(bookStore.stockBooks(books), bookStore.books);
    });

    it('Hire should add Workers correct', () => {
        assert.equal(bookStore.hire('John', 'front-desk'), `John started work at Orange as front-desk`);
    });

    it('Hire should add throw an Error', () => {
        bookStore.hire('John', 'front-desk');
        assert.throws(() => bookStore.hire('John', 'seller'), 'This person is our employee');
    });

    it('Fire should add throw an Error', () => {
        assert.throws(() => bookStore.fire('Nilsun', 'seller'), `Nilsun doesn't work here`);
    });
    it('Fire should fired worker', () => {
        bookStore.hire('Nilsun', 'seller');
        assert.equal(bookStore.fire('Nilsun', 'seller'), `Nilsun is fired`)
    });

    it('Sell Book should throw an Error if book doesnt exist', () => {
        assert.throws(() => bookStore.sellBook('Love', 'Jonh'), 'This book is out of stock');
    })
    it('Sell Book should throw an Error if worker doesnt exist', () => {
        bookStore.stockBooks(books);
        assert.throws(() => bookStore.sellBook('Love', 'Nina'), 'Nina is not working here');
    })

    it('Print Workers', () => {
        bookStore.hire('John', 'seller');
        assert.equal(bookStore.printWorkers(), 'Name:John Position:seller BooksSold:0');
    })
});