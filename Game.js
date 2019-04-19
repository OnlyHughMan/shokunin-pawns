const Board = require('./Board');

class Game {
  constructor() {
    this.board = new Board();
  }
}

module.exports = Game;