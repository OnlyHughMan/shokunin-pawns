const Board = require('./Board');
const { pickUpThePieces } = require('./pieceMaker')
const { printGrid } = require('./displayHelper')

class Game {
  constructor() {
    this.board = new Board();
    this.pieces = pickUpThePieces();
  }

  placePieces() {

  }

  display() {
    printGrid(this.board.grid);
  }
}

module.exports = Game;