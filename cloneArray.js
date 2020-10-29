// ./cloneArray.js
/*function cloneArray(toClone) {
  return [...toClone];
} <-- clones array primitives, references for non-primitive items*/

function cloneArray(toClone) {
  let output = Array.isArray(toClone) ? [] : {};
  for (let data in toClone) {
    let value = toClone[data];
    output[data] = ( typeof value === "object" ) ? cloneArray(value) : value;
  };

  return output;
}

module.exports = cloneArray;
