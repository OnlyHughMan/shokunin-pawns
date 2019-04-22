const { place, getRestrictedKingCells } = require('../piecePlacer');

  describe('getCellsForSecondKing', () => {
    it('should take out adjacent cells', () => {
      const expected = [
        [0, 1],
        [1, 0], [1, 1], [1, 2],
        [2, 1]
      ]
      const result = getRestrictedKingCells([1, 1])
      expect(result).toEqual(expected);
    });
  });
});
