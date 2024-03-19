// function GameBoard() {
    
    
//     const rows = 3;
//     const columns = 3;
//     const board = [];

//     // Create 2d array that will represent the state of the game board, row 0 the top row, column 0 is left - first column

//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for (let j = 0; j < columns; j++) {
//         board[i].push(Cell());
//         }
//     }
//     // method to get board for render it in UI 
//     const getBoard = () => board;



// }

let cells = document.querySelectorAll('#field td');
start(cells);


function start(cells) {
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
            this.textContent = ['X', 'O'][i % 2];
            this.removeEventListener('click', step);
            if (isVictory(cells)) {
				alert(this.textContent);
			}
            else if (i == 8) {
                alert("TIE!")
            }
            i++;
		});
        
    }

}

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
        // else { 
        //     return
        // }
	}
    return false;
}