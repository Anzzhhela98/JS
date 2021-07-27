function printDeckOfCards(cards) {
    const deck = [];
    for (const card of cards) {
        try {
            const toArr = [...card];
            const face = toArr.length == 3 ? toArr.slice(0, 2).join('') : toArr.shift();
            const suit = toArr.pop();
            deck.push(createCard(face, suit));
        } catch (ex) {
            console.log(`Invalid card: ${card}`);
        }
    }

    console.log(deck.map((card) => card.toString()).join(' '));

    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' };

        if (!suits[suit] || !faces.includes(face)) {
            throw new Error('Error');
        }

        class Card {
            constructor(face, suit) {
                this.face = face;
                this.suit = suit;
            }

            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        }

        return new Card(face, suit);
    }
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);