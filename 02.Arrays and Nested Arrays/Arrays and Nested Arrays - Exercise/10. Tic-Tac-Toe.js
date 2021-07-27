function solve(array) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let playerXReady = true;

    for (let i = 0; i < array.length; i++) {
        let row = Number(array[i].split(' ').slice(0, 1));
        let col = Number(array[i].split(' ').slice(1, 2));

        if (board[row][col] === false) {
            if (playerXReady) {
                board[row][col] = 'X'
                if (isWinner(board, 'X')) {
                    return `Player X wins!\n${printMatrix()}`;
                }
                playerXReady = false;
            } else {
                board[row][col] = 'O'
                if (isWinner(board, 'O')) {
                    return `Player O wins!\n${printMatrix()}`;
                }
                playerXReady = true;
            }
        } else if (board[row][col] === 'X' || board[row][col] === 'O' && board.includes(false)) {
            console.log(`This place is already taken. Please choose another!`);
        }
    }

    return `The game ended! Nobody wins :(\n${printMatrix()}`;

    function printMatrix() {
        let printedMatrix = '';
        board.forEach(row => printedMatrix += row.join('\t') + '\n');
        return printedMatrix;
    }

    function isWinner(board, player) {
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
            return true;
        }

        for (let i = 0; i < array.length; i++) {
            if ((board[i][0] == player && board[i][1] == player && board[i][2] == player) ||
                (board[0][i] == player && board[1][i] == player && board[2][i] == player)) {
                return true;
            }
            return false
        }
    }
}