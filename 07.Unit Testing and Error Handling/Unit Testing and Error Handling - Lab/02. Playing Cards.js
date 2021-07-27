function CreateCards(currFace, suit) {
    const type = {
        face: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suits: { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' },
        toString() {
            return `${currFace}${type.suits[suit]}`;
        }
    }

    if (type.suits[suit] && type.face.includes(currFace)) {
        return type.toString();

    } else {
        throw new Error('Error')
    }
}

console.log(CreateCards('10', 'H'));
console.log(CreateCards('A', 'S'));
console.log(CreateCards('1', 'C'));