var squareOne = document.querySelector("#one")
var squareTwo = document.querySelector("#two")
var squareThree = document.querySelector("#three")
var squareFour = document.querySelector("#four")
var squareFive = document.querySelector("#five")
var squareSix = document.querySelector("#six")
var squareSeven = document.querySelector("#seven")
var squareEight = document.querySelector("#eight")
var squareNine = document.querySelector("#nine")

function changeColor(event) {
  event.target.style.backgroundColor = '#1A5276';
}

squareOne.addEventListener('click', changeColor)
squareTwo.addEventListener('click', changeColor)
squareThree.addEventListener('click', changeColor)
squareFour.addEventListener('click', changeColor)
squareFive.addEventListener('click', changeColor)
squareSix.addEventListener('click', changeColor)
squareSeven.addEventListener('click', changeColor)
squareEight.addEventListener('click', changeColor)
squareNine.addEventListener('click', changeColor)

