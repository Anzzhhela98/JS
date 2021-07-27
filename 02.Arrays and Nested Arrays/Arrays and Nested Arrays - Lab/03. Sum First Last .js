function solve(array) {
    let firstNum = Number(array.slice(0, 1));
    let lastNum = Number(array.pop());

    return firstNum+lastNum;
}

console.log(solve([3, 4, 5, 9]))


function solve(numbers = []) {
    return +numbers[0] + +numbers[numbers.length - 1];
  }

  console.log(solve([3, 4, 5, 9]))