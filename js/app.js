/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let arrSquares = []
let player1, player2, winner, aTie



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
const gameMsg = document.querySelector('#message')

console.log(row33)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()
function init() {
  //initializing the board array, how to set the indexes?
arrSquares = [null, null, null, null, null, null, null, null, null]
//initailizing variables
  let player1 = 1
  let player2 = -1
  let winner = null
  let aTie = 'T'
}

function render() {
arrSquares.forEach
}
