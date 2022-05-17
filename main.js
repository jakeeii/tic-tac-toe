// Make a module with a gameboard object  
// Store the gameboard as an array
// Make player objects (factory function or constructor)

// Make two different functions to place a mark on the board
// Make a function to switch between players
// Make a function to check if there is a winner after each move on all directions

const tile1 = document.querySelector('.tile1')
const tile2 = document.querySelector('.tile2')
const tile3 = document.querySelector('.tile3')
const tile4 = document.querySelector('.tile4')
const tile5 = document.querySelector('.tile5')
const tile6 = document.querySelector('.tile6')
const tile7 = document.querySelector('.tile7')
const tile8 = document.querySelector('.tile8')
const tile9 = document.querySelector('.tile9')
const restart = document.querySelector('.restart')

const gameboard = (function() {

  const board = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]

  const placeX = function(tile) {
    if (tile.textContent !== "") {
      return
    } else {
      tile.textContent = "X"
    }
  }

  const placeO = function(tile) {
    if (tile.textContent !== "") {
      return
    } else {
      tile.textContent = "O"
    }
  }

  const getCurrentPlayer = function() {

  } 

  const startNewGame = function() {
    const playerX = Player('Player 1', 'X')
    const playerO = Player('Player 2', 'O')
  }

  const clearBoard = function() {
    board.forEach((tile) => {
      tile.textContent = ""
    })
  }

  return { placeO, placeX, startNewGame, clearBoard };

}())

const Player = (name, mark) => {
  const getName = () => name
  const getMark = () => mark

  return { getName, getMark }
}
  
tile5.addEventListener('click', (ev) => {
  gameboard.placeO(ev.target)
})

tile8.addEventListener('click', (ev) => {
  gameboard.placeO(ev.target)
})

restart.addEventListener('click', () => {
  gameboard.clearBoard()
})