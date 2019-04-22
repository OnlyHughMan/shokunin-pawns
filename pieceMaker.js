const { flatten } = require('lodash');
const Piece = require('./Piece');
const { allegiances, types } = require('./constants');

const generatePieceFrequency = (max) => {
  return Math.ceil(Math.random() * max - 1);
};

const makePiecesByType = (type, allegiance) => {
  const pieceFrequency = type.symbol.toLowerCase() === 'k' ? 1 : generatePieceFrequency(type.max);
  if (pieceFrequency === 0) return null;
  return Array(pieceFrequency).fill(new Piece(type.symbol, allegiance));
};

const pledgeAllegiance = (allegiance) => {
  return flatten(Object.keys(types).map(key => {
    return makePiecesByType(types[key], allegiance);
  }).filter(noNulls => noNulls));
};

const pickUpThePieces = () => {
  const pieces = {}
  allegiances.map(allegiance => {
    pieces[allegiance] = pledgeAllegiance(allegiance)
    return pieces[allegiance];
  });
  return pieces;
}

module.exports = { pickUpThePieces };
