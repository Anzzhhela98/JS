function solve(array, n) {
    return array.filter((_, i) => i % n == 0)
}
console.log(solve(['1',  
'2', 
'3',  
'4',  
'5'],  
6 ))