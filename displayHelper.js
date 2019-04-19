
const translateNulls = (row) => {
  return row.map(cell => {
    return cell ? cell : '.'
  });
}

const rasterizeBoard = (row) => {
  stringifiedRow = translateNulls(row)
  return stringifiedRow.join(' ') + '\n';
}

const printGrid = (grid) => {
  let string = '';
  grid.map(row => {
    string += rasterizeBoard(row);
  })
  console.log(string);
}

module.exports = { printGrid }