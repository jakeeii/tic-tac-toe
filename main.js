// Make a module with a gameboard object  
// Store the gameboard as an array
// Make player objects (factory function or constructor)
const tile1 = document.querySelector('.tile1')
const tile2 = document.querySelector('.tile2')
const tile3 = document.querySelector('.tile3')
const tile4 = document.querySelector('.tile4')
const tile5 = document.querySelector('.tile5')
const tile6 = document.querySelector('.tile6')
const tile7 = document.querySelector('.tile7')
const tile8 = document.querySelector('.tile8')
const tile9 = document.querySelector('.tile9')

const gameboard = (function() {
  let board = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
}())