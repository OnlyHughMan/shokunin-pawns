class Board {
  constructor() {
    this.grid = [...Array(8)].map(e => Array(8).fill(null));
  }

  setPiece(y, x, symbol) {
    this.grid[y][x] = symbol;
  }

  setCell(x, y, type) {
    console.log(x, y, type);
    this.grid[x][y] = type;
  }
}

module.exports = Board;
