
var squares = document.querySelectorAll(".tile")

var counter = 0
var player = ""

var originalColor = '#EAF2F8'
var p1Color = '#2471A3'
var p2Color = '#7FB3D5'
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
  // console.log(boardLog)
}

var winner
var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

// function checkWinOrDraw(event){ 
//   for(var i = 0; i < winConditions.length; i++){
//     var winCombo = winConditions[i]
//     for(var i = 0; i < winCombo.length; i++){
//       if(winCombo[i] === player){
//         endGame(player)
//       }
//     }
//   }
// }


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

// function checkWinOrDraw(event){
//   var winCombo = winConditions[0]
//   win = winCombo.every(function(index) {
//     return boardLog[index] === player
//   })
//   if (win) {
//     endGame(player)
//   }
// }

function endGame(winner) {
  console.log(winner + " wins!")
  // alert(winner + " wins!")
  gameFinished = true
}

function checkDraw(event){
    if(!boardLog.includes(undefined)){
      console.log("Players Draw!")
      // alert("Players Draw!")
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


