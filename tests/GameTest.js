const Game = require('../Game');
const Board = require('../Board');

jest.mock('../Board')

describe('Game', () => {
  describe('new Game()', () => {
    it('game should own a board', () => {
      const game = new Game();
      expect(Board).toHaveBeenCalled();
      expect(game.board).toBeDefined();
    });
  });
});
