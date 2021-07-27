function solve(array = []) {
    return array
        .sort((x, y) => x - y)
        .slice(-Math.ceil(array.length / 2))

}


console.log(solve([3, 19, 14, 7, 2, 19, 6]))
console.log(solve([4, 7, 2, 5]))