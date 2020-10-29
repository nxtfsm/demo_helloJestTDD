// getLongest.js
function getLongest(fromArray) {
  const reducer = (longest, nextValue) => _pickLonger(longest, nextValue);
  return fromArray.reduce(reducer);
};

function _pickLonger(a, b) {
  return a.length >= b.length ? a : b;
};

module.exports = { getLongest, _pickLonger };
