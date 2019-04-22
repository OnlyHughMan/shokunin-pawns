
const translateNulls = (row) => {
  return row.map(cell => {
    return cell || '.'
  });
}

const rasterizeBoard = (row) => {
  const stringifiedRow = translateNulls(row)
  return `${stringifiedRow.join(' ')}\n`;
}

const printGrid = (grid) => {
  let string = '';
  grid.map(row => {
    string += rasterizeBoard(row);
    return string;
  })
  console.log(string);
}

module.exports = { printGrid }
