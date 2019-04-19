const Board = require("../Board");

describe('board', () => {
  describe('new board()', () => {
    it('should initialize an 8x8 2D array with null values', () => {
      const board = new Board();
      expect(board.grid[0].length).toBe(8);
      expect(board.grid[7][7]).toBeNull();
      expect(board.grid[8]).toBeUndefined();
    });
  });
});