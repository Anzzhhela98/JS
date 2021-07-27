function solve(array, rotation) {

    for (let i = 0; i < rotation; i++) {
        let num = array.pop();
        array.unshift(num);
    }

    return array.join(' ');
}
  console.log(solve(['1',  
  '2',  
  '3',  
  '4'],  
  2 ))