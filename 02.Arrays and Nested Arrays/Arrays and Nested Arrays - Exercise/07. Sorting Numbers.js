function solve(array) {
    array.sort((a, b) => a - b);
    let result = [];

    while (array.length) {
        result.push(array.shift())
        result.push(array.pop())
    }

    return result.filter(number => number != undefined)
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))