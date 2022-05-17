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
const announcement = document.querySelector('.announcement')
let welcomeMessage = 'Select a tile to begin. X starts.'


const gameboard = (function() {

  function Player(name, mark) {
    this.name = name
    this.mark = mark
  }

  const board = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
  const playerX = new Player('Player 1', 'X')
  const playerO = new Player('Player 2', 'O')
  let currentPlayer = playerX
  let gameOver = false
  let currentPlayerMessage = ''

  const placeMark = function(tile, mark) {
    if (tile.textContent !== "" || gameOver == true) {
      return
    } else {
      tile.textContent = mark
    }
    isGameOver()
    if (gameOver == false) {
      switchPlayers()
      updateAnnouncement(currentPlayerMessage)
    }
  }

  const switchPlayers = function() {
    if (currentPlayer == playerX) {
      currentPlayer = playerO
      currentPlayerMessage = `It is ${playerO.mark}'s turn.`
    } else {
      currentPlayer = playerX
      currentPlayerMessage = `It is ${playerX.mark}'s turn`
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

  const restartGame = function() {
    clearBoard()
    updateAnnouncement(welcomeMessage)
    gameOver = false
  }

  const updateAnnouncement = function(message) {
    announcement.textContent = message
  }

  const checkXWinner = function() {
    if (tile1.textContent == 'X' && tile2.textContent == 'X' && tile3.textContent == 'X') {
      return true
    } else if (tile4.textContent == 'X' && tile5.textContent == 'X' && tile6.textContent == 'X') {
      return true
    } else if (tile7.textContent == 'X' && tile8.textContent == 'X' && tile9.textContent == 'X') {
      return true
    } else if (tile1.textContent == 'X' && tile4.textContent == 'X' && tile7.textContent == 'X') {
      return true
    } else if (tile2.textContent == 'X' && tile5.textContent == 'X' && tile8.textContent == 'X') {
      return true
    } else if (tile3.textContent == 'X' && tile6.textContent == 'X' && tile9.textContent == 'X') {
      return true
    } else if (tile1.textContent == 'X' && tile5.textContent == 'X' && tile9.textContent == 'X') {
      return true
    } else if (tile3.textContent == 'X' && tile5.textContent == 'X' && tile7.textContent == 'X') {
      return true
    } else {
      return false
    }
  }

  const checkOWinner = function() {
    if (tile1.textContent == 'O' && tile2.textContent == 'O' && tile3.textContent == 'O') {
      return true
    } else if (tile4.textContent == 'O' && tile5.textContent == 'O' && tile6.textContent == 'O') {
      return true
    } else if (tile7.textContent == 'O' && tile8.textContent == 'O' && tile9.textContent == 'O') {
      return true
    } else if (tile1.textContent == 'O' && tile4.textContent == 'O' && tile7.textContent == 'O') {
      return true
    } else if (tile2.textContent == 'O' && tile5.textContent == 'O' && tile8.textContent == 'O') {
      return true
    } else if (tile3.textContent == 'O' && tile6.textContent == 'O' && tile9.textContent == 'O') {
      return true
    } else if (tile1.textContent == 'O' && tile5.textContent == 'O' && tile9.textContent == 'O') {
      return true
    } else if (tile3.textContent == 'O' && tile5.textContent == 'O' && tile7.textContent == 'O') {
      return true
    } else {
      return false
    }
  }

  const isGameOver = function() {
    if (checkXWinner() == true) {
      gameOver = true
      updateAnnouncement(`${playerX.name} is the winner!`)
    } else if (checkOWinner() == true) {
      gameOver = true
      updateAnnouncement(`${playerO.name} is the winner!`)
    } else {
      return
    }
  }

  return { placeMark, restartGame, getCurrentMark };

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
  gameboard.restartGame()
})