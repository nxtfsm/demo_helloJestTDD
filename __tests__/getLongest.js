// __tests__/getLongest.js
const { getLongest, _pickLonger } = require('../getLongest');
const testArray = ["Chuuk", "Yap", "Kiribati", "Majuro", "Pohnpei", "Kosrae"];
const target = "Kiribati";

test('accurately selects longest string in array', () => {
  expect(getLongest(testArray)).toBe(target);
});

test('accurately picks longer of two strings', () => {
  expect(_pickLonger('Yap', 'Kiribati')).toBe('Kiribati');
  expect(_pickLonger('Chuuk', 'Yap')).toBe('Chuuk');
  expect(_pickLonger('Majuro', 'Kosrae')).toBe('Majuro');
});

// 2 step problem
// -> Track longest in list, return when list ends
// -> Compare two values, return longer of two
