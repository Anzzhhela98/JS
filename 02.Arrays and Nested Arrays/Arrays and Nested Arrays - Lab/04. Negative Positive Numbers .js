function solve(numbers = []) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] < 0 ? result.unshift(numbers[i]) : result.push(numbers[i]);
    }

    return result.join('\n');
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));