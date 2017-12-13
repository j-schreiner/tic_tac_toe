var squareOne = document.querySelector("#one")
var squareTwo = document.querySelector("#two")
var squareThree = document.querySelector("#three")
var squareFour = document.querySelector("#four")
var squareFive = document.querySelector("#five")
var squareSix = document.querySelector("#six")
var squareSeven = document.querySelector("#seven")
var squareEight = document.querySelector("#eight")
var squareNine = document.querySelector("#nine")

var counter = 0
var player = ""

function fillSquare(event){
  counter++
  if(counter % 2 !== 0){
    event.target.style.backgroundColor = '#2471A3'
    player = "Player One"
  } else{
    event.target.style.backgroundColor = '#7FB3D5'
    player = "Player Two"
  } 
} 

function makeMove(event){
  if(event.target.style.backgroundColor === ""){
    fillSquare(event) 
  }
}

// var playerOneLog = new Array(9)
// var playerTwoLog = new Array(9)

// function fillPlayerLog(){
//   if(counter % 2 !== 0){
//     // push square id/number into playerOneLog array
//   } else{
//     // push square id/number into playerTwoLog array
//   }
// }

var winningCombos = {
combo1: [0, 1, 2], 
combo2: [3, 4, 5], 
combo3: [6, 7, 8],
combo4: [0, 3, 6],
combo5: [1, 4, 7],
combo6: [2, 5, 8],
combo7: [0, 4, 8],
combo8: [2, 4, 6]
}

// function checkWinDraw(playerOneLog, playerTwoLog){
//   for(){
//     if(playerOneLog.includes()){ // if playerOneLog contains a winning combo
//     alert("Player One wins!")
//     } else if(playerTwoLog.includes()){ // if playerTwoLog contains a winning combo
//       alert("Player Two wins!")
//       } 
//   }
// }

squareOne.addEventListener('click', makeMove) // makeMove, checkWinDraw
squareTwo.addEventListener('click', makeMove)
squareThree.addEventListener('click', makeMove)
squareFour.addEventListener('click', makeMove)
squareFive.addEventListener('click', makeMove)
squareSix.addEventListener('click', makeMove)
squareSeven.addEventListener('click', makeMove)
squareEight.addEventListener('click', makeMove)
squareNine.addEventListener('click', makeMove)
