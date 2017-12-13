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
var boardLog = []


// alternating between colors and players
// logging targets clicked by each player

function playGame(event){
  // debugger
  counter++
  if(counter % 2 !== 0){
    player = "player one"
    event.target.style.backgroundColor = '#1A5276'
  } else{
    player = "player two"
    event.target.style.backgroundColor = '#7FB3D5'
  }
}

// winning square combinations


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




// function checkWin(winningCombos){



// need to condense this to apply to all squares
squareOne.addEventListener('click', playGame)
squareTwo.addEventListener('click', playGame)
squareThree.addEventListener('click', playGame)
squareFour.addEventListener('click', playGame)
squareFive.addEventListener('click', playGame)
squareSix.addEventListener('click', playGame)
squareSeven.addEventListener('click', playGame)
squareEight.addEventListener('click', playGame)
squareNine.addEventListener('click', playGame)
