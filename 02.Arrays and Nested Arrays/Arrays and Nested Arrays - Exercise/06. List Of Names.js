function solve(array){

    array.sort()
    .forEach((name,i) => console.log(`${++i}.${name}`));
    

}

solve(["John", "Bob", "Christina", "Ema"] )