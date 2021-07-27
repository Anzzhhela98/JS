const { ChristmasMovies } = require('./02. Christmas Movies_Resources.js');
const { assert } = require('chai');
const { expect } = require('chai');

describe('ChristmasMovies Tests', () => {
    let christmas = '';
    beforeEach(() => {
        christmas = new ChristmasMovies();
    });

    //buy
    it('buyMovie should add correct', () => {
        assert.equal(christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Dilun Bed']),
            `You just got Harry Potter to your collection in which Rupert Grint, Dilun Bed are taking part!`)
    });
    it('buyMovie should throw Error', () => {
        christmas.buyMovie('Harry Potter', ['Rupert Grint']);
        assert.throws(() => christmas.buyMovie('Harry Potter', 'Rupert Grint'),
            `You already own Harry Potter in your collection!`)
    });
    it('buyMovie should add just one actor', () => {
        assert.equal(christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Rupert Grint']),
            `You just got Harry Potter to your collection in which Rupert Grint are taking part!`)
    });

    it('discardMovie should throw Error', () => {
        assert.throws(() => christmas.discardMovie('Harry Potter'), `Harry Potter is not at your collection!`);
    });
    it('discardMovie should remove movie', () => {
        christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Dilun Bed']);
        christmas.watchMovie('Harry Potter');
        assert.equal(christmas.discardMovie('Harry Potter'), `You just threw away Harry Potter!`)
    });
    it('discardMovie should throw Error', () => {
        christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Dilun Bed']);
        assert.throws(() => christmas.discardMovie('Harry Potter'), `Harry Potter is not watched!`);
    });

    it('watchMovie should throw Error', () => {
        assert.throws(() => christmas.watchMovie('Harry Potter'), 'No such movie in your collection!')
    })
    it('watchMovie should increase watched movie', () => {
        christmas.buyMovie('Harry Potter', ['Rupert Grint']);
        christmas.watchMovie('Harry Potter');
        christmas.watchMovie('Harry Potter');
        christmas.watchMovie('Harry Potter');
        assert.equal(christmas.watched['Harry Potter'], 3)
    })

    it('favouriteMovie should return higest watched movie', () => {
        christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Dilun Bed']);
        christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
        christmas.watchMovie('Harry Potter');
        christmas.watchMovie('Harry Potter');
        assert.equal(christmas.favouriteMovie(),
            `Your favourite movie is Harry Potter and you have watched it 2 times!`)
    });
    it('favouriteMovie should throw Error', () => {
        assert.throws(() => christmas.favouriteMovie(), 'You have not watched a movie yet this year!');
    })
    it('favouriteMovie should throw Error', () => {
        assert.throws(() => christmas.favouriteMovie(), 'You have not watched a movie yet this year!');
    })

    it('mostStarredActor should return actor', () => {
        christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Macaulay Culkin']);
        christmas.watchMovie('Home Alone');
        assert.equal(christmas.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!')
    });

    it('mostStarredActor should throw Error', () => {
        assert.throws(() => christmas.mostStarredActor(), 'You have not watched a movie yet this year!')
    });
})

// watchMovie(movieName) {
//     let movie = this.movieCollection.find(m => movieName === m.name);
//     if (movie) {
//         if (!this.watched.hasOwnProperty(movie.name)) {
//             this.watched[movie.name] = 1;
//         } else {
//             this.watched[movie.name]++;
//         }
//     } 
// }