
const { isEqual } = require('lodash');
const { allegiances } = require('./constants');
let kingPlaced = false;
let firstKingCell;


const getRestrictedKingCells = kingCell => {
  const kingX = kingCell[0]
  const kingY = kingCell[1]
  return [
    [kingX - 1, kingY],
    [kingX, kingY - 1],
    kingCell,
    [kingX, kingY + 1],
    [kingX + 1, kingY],
  ];
}

const isKing = piece => {
  return piece.type.toLowerCase() === 'k';
}
const regularRandom = (range = 7, modifier = -1) => () => {
  return Math.ceil(Math.random() * range + modifier)
}

const regicideRandom = restrictedCells => {
  const cell = [regularRandom()(), regularRandom()()];
  return restrictedCells.map(rc => {
    if (isEqual(rc, cell)) {
      regicideRandom();
    }
    return { x: cell[0], y: cell[1] };
  })[0];
}

const divineIntervention = piece => {
  let randomCoord = regularRandom();
  if (piece.type === 'p') randomCoord = regularRandom(6, 1);
  if (piece.type === 'P') randomCoord = regularRandom(6);
  return { x: randomCoord(), y: randomCoord() };
}

const royalIntervention = () => {
  const restrictedCells = getRestrictedKingCells(firstKingCell)
  const { x, y } = regicideRandom(restrictedCells);
  return { x, y };
}

const placeInCell = (piece, board) => {
  if (isKing(piece) && kingPlaced) {
    const { x, y } = royalIntervention(piece);
    board.setCell(x, y, piece.type);
  } else {
    const { x, y } = divineIntervention(piece);
    board.setCell(x, y, piece.type);
    if (isKing(piece)) {
      firstKingCell = [x, y];
      kingPlaced = true;
    }
  }
}

const place = (pieces, board) => {
  allegiances.map((allegiance) => {
    return pieces[allegiance].map((piece) => {
      return placeInCell(piece, board)
    })
  });
};

module.exports = { place, getRestrictedKingCells };
