
var squares = document.querySelectorAll(".tile")
var p1Wins = document.querySelector('#p1-wins')
var p2Wins = document.querySelector('#p2-wins')
var pdraw = document.querySelector('#players-draw')

var counter = 0
var player = ""

var originalColor = '#EAF2F8'
var p1Color = '#225667'
var p2Color = '#ABE3E1'
var p1 = 'P1'
var p2 = 'P2'
var gameFinished = false


function fillSquare(event){
  if(counter % 2 !== 0){
    event.target.style.backgroundColor = p1Color
    player = p1
  } else{
    event.target.style.backgroundColor = p2Color
    player = p2
  } 
} 

var boardLog = new Array(9)

function fillBoardLog(event){
  if(counter % 2 !== 0){
    boardLog[Number(event.target.id[1])] = p1
  } else{
    boardLog[Number(event.target.id[1])] = p2
  }
}

var winner
var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function checkWin(event){
  for(var i = 0; i < winConditions.length; i++){
    var winCombo = winConditions[i]
    win = winCombo.every(function(index){
      return boardLog[index] === player  
    })
    if(win){
      endGame(player)
      return true
    }
  }
}

function endGame(player) {
  if(player === "P1"){
    p1Wins.textContent = "WINS!"
  } else if(player === "P2"){
    p2Wins.textContent = "WINS!"
  }
  gameFinished = true
}

function checkDraw(event){
    if(!boardLog.includes(undefined)){
      pdraw.textContent = "PLAYERS DRAW"
    gameFinished = true
    }
}

function makeMove(event){
  counter++
  if(event.target.style.backgroundColor === "" && !gameFinished){
    fillSquare(event)
    fillBoardLog(event)
    if(!checkWin(event)){
      checkDraw(event)
  } 
}
}

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', makeMove)
}


