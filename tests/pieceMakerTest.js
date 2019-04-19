const { pickUpThePieces } = require('../pieceMaker');
const Piece = require('../Piece');

describe('generatePieces', () => {
  it('creates pieces with allegiances as keys and non empty arrays', () => {
    const pieces = pickUpThePieces()
    expect(Object.keys(pieces)).toEqual(['w', 'b']);
    expect(pieces['w'].length).toBeGreaterThan(1);
    expect(pieces['b'].length).toBeGreaterThan(1);
  });

  it('creates pieces containing... pieces', () => {
    const pieces = pickUpThePieces()
    expect(pieces['w'][0] instanceof Piece).toBeTruthy()
    expect(pieces['b'][0] instanceof Piece).toBeTruthy()
  });
});