// Write a program that concatenates a string to form a chessboard, size rows deep
let size = 20;
let board = '';

for (let lineCounter = 0; lineCounter < size; lineCounter += 1, board+='\n') {
    for (let squareCounter = 0; squareCounter < size; squareCounter += 1) {
        if ((lineCounter + squareCounter) % 2 === 0) {
            board += ' ';
        }
        else {
            board += '#';
        }
    }
}

console.log(board);