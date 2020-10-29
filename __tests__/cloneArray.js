// ./__tests__/cloneArray.js
const cloneArray = require('../cloneArray');
const { testArray : target } = require('./main');

test('clones array to avoid changing original datasource', () => {
  const result = cloneArray(target);
  expect(result).toEqual(target);
  expect(result).not.toBe(target);
});
