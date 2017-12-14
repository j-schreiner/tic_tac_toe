var s0 = document.querySelector("#s0")
var s1 = document.querySelector("#s1")
var s2 = document.querySelector("#s2")
var s3 = document.querySelector("#s3")
var s4 = document.querySelector("#s4")
var s5 = document.querySelector("#s5")
var s6 = document.querySelector("#s6")
var s7 = document.querySelector("#s7")
var s8 = document.querySelector("#s8")

var squares = [s0, s1, s2, s3, s4, s5, s6, s7, s8]

var counter = 0
var player = ""


function fillSquare(event){
  if(counter % 2 !== 0){
    event.target.style.backgroundColor = '#2471A3'
    player = "Player One"
  } else{
    event.target.style.backgroundColor = '#7FB3D5'
    player = "Player Two"
  } 
} 

var boardLog = new Array(9)

function fillBoardLog(event){
  boardLog[Number(event.target.id[1])] = event.target.style.backgroundColor
}

function makeMove(event){
  counter++
  if(event.target.style.backgroundColor === ""){
    fillSquare(event)
    fillBoardLog(event)
    checkWinDraw(event)

  } 
}

var winner

function checkWinDraw(event){ 
  winner = player
  if(boardLog.includes(undefined)){
    if(boardLog[0] === boardLog[1] && boardLog[1] === boardLog[2] && boardLog[0] === boardLog[2] && boardLog[0] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[3] === boardLog[4] && boardLog[4] === boardLog[5] && boardLog[3] === boardLog[5] && boardLog[3] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[6] === boardLog[7] && boardLog[7] === boardLog[8] && boardLog[6] === boardLog[8] && boardLog[6] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[0] === boardLog[3] && boardLog[3] === boardLog[6] && boardLog[0] === boardLog[6] && boardLog[0] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[1] === boardLog[4] && boardLog[4] === boardLog[7] && boardLog[1] === boardLog[7] && boardLog[1] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[2] === boardLog[5] && boardLog[5] === boardLog[8] && boardLog[2] === boardLog[8] && boardLog[2] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[0] === boardLog[4] && boardLog[4] === boardLog[8] && boardLog[0] === boardLog[8] && boardLog[0] !== undefined){
      alert(winner + " wins!")
    } else if(boardLog[2] === boardLog[4] && boardLog[4] === boardLog[6] && boardLog[2] === boardLog[6] && boardLog[2] !== undefined){
      alert(winner + " wins!")
    } 
  } else{
    alert("Players Draw!")
  }
}

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', makeMove)
}


