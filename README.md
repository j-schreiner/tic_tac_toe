# Tic Tac Toe
### Instructions

Tic Tac Toe - with a twist. 
* Colours are used to differentiate between players instead of 'x' and 'o' markers.
* Players take turns making moves on the 3x3 square game board.
* Player one always begins.
[Play Tic Tac Toe](https://j-schreiner.github.io/tic_tac_toe/)

### Challenges
Working out the win logic was much more complex than I initially thought. In order to create a working game, it was necessary to break down the process into a series of smaller steps to be executed:
* Taking user input
* Checking whether a position on the board had already been selected
* Outputing changes to the board/window by manipulating DOM elements
* Switching between players & keeping track of each player's moves
* Checking for a win or draw - after each player makes a move
These steps, themselves were functions that contained individual steps.

### Future Development
I would like to return to this project and introduce:
* customisable color schemes
* keeping track of wins, player high scores, etc
* switching the start player
* scalability, increasing game board size 4x4, etc
* further manipultaion of DOM objects with JavaScript