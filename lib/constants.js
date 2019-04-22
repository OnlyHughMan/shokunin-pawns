const allegiances = [
  'w',
  'b'
];

const types = {
  king: {
    symbol: 'k',
    max: 1
  },
  queen: {
    symbol: 'q',
    max: 1,
  },
  pawn: {
    symbol: 'p',
    max: 8,
  },
  bishop: {
    symbol: 'b',
    max: 2,
  },
  knight: {
    symbol: 'n',
    max: 2,
  },
  rook: {
    symbol: 'r',
    max: 2,
  }
};

module.exports = { allegiances, types }
