function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, str.length - n),
        print: () => console.log(str),
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.removeEnd(2);
firstZeroTest.removeStart(1);
firstZeroTest.print();

console.log(solution());