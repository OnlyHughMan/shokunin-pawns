class Board {
  constructor() {
    this.grid = [...Array(8)].map(e => Array(8).fill(null));
  }

}

module.exports = Board;