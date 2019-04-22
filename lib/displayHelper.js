
const translateNulls = (row) => {
  return row.map(cell => {
    return cell || '.'
  });
}

const rasterizeRow = (row) => {
  const stringifiedRow = translateNulls(row)
  return `${stringifiedRow.join(' ')}\n`;
}

const printGrid = (grid) => {
  let board = '';
  grid.map(row => {
    board += rasterizeRow(row);
    return board;
  })
  console.log(board);
}

module.exports = { printGrid }
