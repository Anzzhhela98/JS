function solve(matrix = []) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            let curNum = matrix[row][col]
            if (checkIfIsInside(matrix, row, col - 1)) {

                if (matrix[row][col - 1] === curNum) {
                    count++;
                    matrix[row][col] = -1;
                }
            }

            if (checkIfIsInside(matrix, row, col + 1)) {

                if (matrix[row][col + 1] === curNum) {
                    count++;
                    matrix[row][col] = -1;
                }
            }

            if (checkIfIsInside(matrix, row - 1, col)) {

                if (matrix[row - 1][col] === curNum) {
                    count++;
                    matrix[row][col] = -1;
                }
            }
            if (checkIfIsInside(matrix, row + 1, col)) {

                if (matrix[row + 1][col] === curNum) {
                    count++;
                    matrix[row][col] = -1;
                }
            }
        }
    }
    return count

    function checkIfIsInside(matrix, row, col) {
        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix.length) {
            return true
        }

        return false
    }
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))