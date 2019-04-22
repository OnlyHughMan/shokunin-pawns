class Board {
  constructor() {
    this.grid = [...Array(8)].map(e => Array(8).fill(null));
    this.kingPlaced = false;
    this.kingCoords = [];
  }

  setCell(x, y, type) {
    this.grid[x][y] = type;
  }

  placeKing(x, y) {
    this.kingPlaced = true;
    this.kingCoords.push(x, y);
  }

  getRestrictedKingCells() {
    const kingX = this.kingCoords[0]
    const kingY = this.kingCoords[1]
    return [
      [kingX - 1, kingY],
      [kingX, kingY - 1],
      this.kingCoords, [kingX, kingY + 1],
      [kingX + 1, kingY]
    ];
  }
}

module.exports = Board;
