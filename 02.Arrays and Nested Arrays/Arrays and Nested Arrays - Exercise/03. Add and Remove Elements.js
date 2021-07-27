function solve(commandArray) {
    let num = 1;
    let array = [];
    for (let i = 0; i < commandArray.length; i++) {
        if (commandArray[i] == 'add') {
            array.push(num);
        }
        else if (commandArray[i] == 'remove') {
            array.pop();
        }
        num++;
    }

    return array.length > 0 ? array.join('\n') : 'Empty';
}
console.log(solve(['remove',  
'remove',  
'remove'] ))