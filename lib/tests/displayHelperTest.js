const { printGrid } = require('../displayHelper');

console.log = jest.fn()

describe('printGrid', () => {
  it('translates null cell to period and adds newline at end row', () => {
    printGrid([[null]]);
    expect(console.log).toHaveBeenCalledWith('.\n');
  });

  it('translates null row to period joins with a space and adds newline at end row', () => {
    printGrid([[null, null]])
    expect(console.log).toHaveBeenCalledWith('. .\n');
  });

  it('does not modify occupied cells', () => {
    printGrid([['k', null], [null, 'P']])
    expect(console.log).toHaveBeenCalledWith('k .\n. P\n');
  });

  it('Deals with ', () => {
    printGrid([['k', 'p'], ['b', 'P']])
    expect(console.log).toHaveBeenCalledWith('k p\nb P\n');
  });
});
