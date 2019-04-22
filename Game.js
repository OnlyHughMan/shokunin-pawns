const Board = require('./Board');
const { pickUpThePieces } = require('./pieceMaker')
const { printGrid } = require('./displayHelper')
const { place } = require('./piecePlacer');

class Game {
  constructor() {
    this.board = new Board();
    this.pieces = pickUpThePieces();
  }

  placePiecesOnBoard() {
    place(this.pieces, this.board)
  }

  display() {
    printGrid(this.board.grid);
  }
}

module.exports = Game;
