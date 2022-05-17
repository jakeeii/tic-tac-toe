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

  function Player(name, mark) {
    this.name = name
    this.mark = mark
  }

  const board = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
  const playerX = new Player('Player 1', 'X')
  const playerO = new Player('Player 2', 'O')
  let currentPlayer = playerX

  const placeMark = function(tile, mark) {
    if (tile.textContent !== "") {
      return
    } else {
      tile.textContent = mark
    }
    switchPlayers()
  }

  const switchPlayers = function() {
    if (currentPlayer == playerX) {
      currentPlayer = playerO
    } else {
      currentPlayer = playerX
    }
  }

  const getCurrentMark = function() {
    return currentPlayer.mark
  }

  const clearBoard = function() {
    board.forEach((tile) => {
      tile.textContent = ""
    })
  }

  return { placeMark, clearBoard, getCurrentMark };

}())

tile1.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile2.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile3.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile4.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})
  
tile5.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile6.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile7.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile8.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

tile9.addEventListener('click', (ev) => {
  gameboard.placeMark(ev.target, gameboard.getCurrentMark())
})

restart.addEventListener('click', () => {
  gameboard.clearBoard()
})