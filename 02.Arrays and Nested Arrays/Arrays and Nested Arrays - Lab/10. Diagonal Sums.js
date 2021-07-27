function solve(matrix = []) {
    let firstDiogonal = 0;
    let secondDiogonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiogonal += matrix[i][i];
        secondDiogonal += matrix[i][matrix.length - 1 - i]
    }

    return [firstDiogonal, secondDiogonal].join(' ');
}

console.log(solve([[20, 40],
[10, 60]]))