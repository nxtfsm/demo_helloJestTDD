// getLongest.js
function getLongest(fromArray) {
  const reducer = (longest, nextValue) => _pickLonger(longest, nextValue);
  return fromArray.reduce(reducer);
};

function _pickLonger(a, b) {
  const longer = a.length >= b.length ? a : b;
  return longer;
};

module.exports = { getLongest, _pickLonger };
