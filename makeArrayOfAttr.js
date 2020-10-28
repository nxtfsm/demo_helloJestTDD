// makeArrayOfAttr.js
function makeArrayOfAttr(fromArray, attrKey) {
  return fromArray.map(obj => obj[attrKey])
};

module.exports = makeArrayOfAttr
