// makeEqualLenByPad.js
const { getLongest } = require('./getLongest');

function makeEqualLenByPad(stringArray) {
  const longest = getLongest(stringArray);
  const paddedArray = stringArray.map(str => str.padEnd(longest.length, ' '));
  return paddedArray;
};

module.exports = makeEqualLenByPad;
