// ./main.js
const cloneArray = require('./cloneArray');
const makeArrayOfAttr = require('./makeArrayOfAttr');
const makeEqualLenByPad = require('./makeEqualLenByPad');

function main(locationObjects, attribute) {
  const workingCopy = cloneArray(locationObjects);
  const attrValues = makeArrayOfAttr(workingCopy, attribute);
  const paddedStrings = makeEqualLenByPad(attrValues);

  workingCopy.map((obj, i) => { obj[attribute] = paddedStrings[i] });

  return workingCopy;
};

module.exports = main;
