function solve(num) {
    return (y) => y + num;
}

const add = solve(5);

console.log(add(2));
console.log(add(3));