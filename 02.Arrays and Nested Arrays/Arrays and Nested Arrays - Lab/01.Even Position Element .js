function even(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i += 2) {
        evenNumbers[i / 2] = array[i];
    }

    return evenNumbers.join(' ');
}


console.log(even(['20', '30', '40', '50', '60']));
console.log(even(['5', '10']));
