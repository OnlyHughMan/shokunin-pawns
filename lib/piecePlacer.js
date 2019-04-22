
const { isEqual } = require('lodash');
const { allegiances } = require('./constants');

const randomCell = (range = 7, modifier = -1) => () => {
  return Math.ceil(Math.random() * range + modifier)
}

const regicideRandom = restrictedCells => {
  const cell = [randomCell()(), randomCell()()];
  return restrictedCells.map(rc => {
    if (isEqual(rc, cell)) {
      regicideRandom(restrictedCells);
    }
    return { x: cell[0], y: cell[1] };
  })[0];
}

const cellEmpty = (board, x, y) => board.grid[x][y] === null;

const regularIntervention = (piece, board) => {
  let randomCoord = randomCell();
  if (piece.type === 'p') randomCoord = randomCell(6, 1);
  if (piece.type === 'P') randomCoord = randomCell(6);
  const x = randomCoord();
  const y = randomCoord();
  if (cellEmpty(board, x, y)) {
    board.setCell(x, y, piece.type);
  } else {
    regularIntervention(piece, board);
  }
  return { x, y };
}

const divineIntervention = (piece, board) => {
  const restrictedCells = board.getRestrictedKingCells(board.kingCoords)
  const { x, y } = regicideRandom(restrictedCells);
  board.setCell(x, y, piece.type);
}

const isKing = piece => piece.type.toLowerCase() === 'k';

const placeInEmptyCell = (piece, board) => {
  if (isKing(piece) && board.kingPlaced) {
    divineIntervention(piece, board);
  } else {
    const { x, y } = regularIntervention(piece, board);
    if (isKing) board.placeKing(x, y)
  }
}

// complexity ensues
const place = (pieces, board) => {
  allegiances.map((allegiance) => {
    return pieces[allegiance].map((piece) => {
      return placeInEmptyCell(piece, board)
    })
  });
};

module.exports = { place };
