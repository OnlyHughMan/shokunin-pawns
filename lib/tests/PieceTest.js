const Piece = require('../Piece');

describe('Piece', () => {
  it('has a name', () => {
    const whiteKing = new Piece('king', 'white');
    expect(whiteKing.type).toEqual('king');
    expect(whiteKing.allegiance).toEqual('white');
  });
});
