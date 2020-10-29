// makeArrayOfAttr.js
function makeArrayOfAttr(fromArray, attrKey) {
  return fromArray.map((obj) => { return obj[attrKey] })
};

module.exports = makeArrayOfAttr
