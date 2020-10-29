// ./main.js
const makeArrayOfAttr = require('./makeArrayOfAttr');
const makeEqualLenByPad = require('./makeEqualLenByPad');

function main(locationObjects, attribute) {
  const attrValues = makeArrayOfAttr(locationObjects, attribute);
  const paddedStrings = makeEqualLenByPad(attrValues);

  locationObjects.map((obj, i) => { obj[attribute] = paddedStrings[i] });

  return locationObjects;
};

module.exports = main;
