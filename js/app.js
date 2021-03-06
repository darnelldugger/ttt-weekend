/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('section > div')
const gameMsg = document.querySelector('#message')
const resetBtn = document.getElementById('reset')
/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
  square.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()
function init() {
  //initializing the board array, how to set the indexes?
  board = [null, null, null, null, null, null, null, null, null]
  //initailizing variables
  
  turn = 1
  winner = null
  render()
}

function render() {
 board.forEach((cell, idx) => {
  let cellColor
  let cellLetter
  if (cell === 1) {
    cellColor = "green"
    cellLetter = 'X'
  } else if (cell === -1) {
    cellColor = "purple"
    cellLetter = 'O'
  } else if (cell === null) {
    cellColor = "white"
    cellLetter = ""
  }
  squares[idx].style.background = cellColor
})
  squares[idx].innerText = cellLetter
}



  if (!winner){
    message.innerText = `It is ${turn === 1 ? "X" : "O"}'s turn!`
  } else if (winner === "T"){
    message.innerText = `Cat's game. 🐱 MEOW!!!!`
  } else {
    message.innerText = `Congratulations ${winner === 1 ? "X" : "O"}!!!!!`
  }

  function handleClick(evt){

    let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (board[sqIdx] || winner) {
      return
    }
    board[sqIdx] = turn
    turn *= -1
    winner = getWinner()
    render()
  }


function getWinner() {
  if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
  if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
  if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
  if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
  if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
  if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
  if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
  if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
  if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0]
  if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3]
  if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6]
  if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0]
  if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1]
  if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2]
  if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0]
  if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2]

  if (board.includes(null)) {
    return null
  } else {
    return "T"
  }
}