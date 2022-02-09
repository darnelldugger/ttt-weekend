/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let arrSquares = []
let O, X, winner, aTie



/*------------------------ Cached Element References ------------------------*/
const row11 = document.querySelector('#sq0')
const row12 = document.querySelector('#sq1')
const row13 = document.querySelector('#sq2')
const row21 = document.querySelector('#sq3')
const row22 = document.querySelector('#sq4')
const row23 = document.querySelector('#sq5')
const row31 = document.querySelector('#sq6')
const row32 = document.querySelector('#sq7')
const row33 = document.querySelector('#sq8')
const squares = document.querySelectorAll('.squares')
const gameMsg = document.querySelector('#message')

console.log(row33)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()
function init() {
  //initializing the board array, how to set the indexes?
arrSquares = [null, null, null, null, null, null, null, null, null]
//initailizing variables
  let X = 1
  let O = -1
  let winner = null
  let aTie = 'T'
}

function render() {
for (let i = 0; i < arrSquares.length; i++){
  if (arrSquares[i] === 1){
    squares[i].innerText = "X"
  } 
  if(arrSquares[i] === -1){
    squares[i].innerText = "O"
  }
}
}

function render() {
  if (!winner){
    "X, it is your turn"
  } else if (winner === "T"){
    "It's a tie game!"
  } else {
    "Congrats! You have won the game!"
  }
}
console.log(arrSquares)