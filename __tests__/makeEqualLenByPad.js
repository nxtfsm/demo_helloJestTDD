// ./__tests__/makeEqualLenByPad.js
const makeEqualLenByPad = require('../makeEqualLenByPad');
const testArray = ["Chuuk", "Yap", "Kiribati", "Majuro", "Pohnpei", "Kosrae"];
const targetArray = [
  "Chuuk   ",
  "Yap     ",
  "Kiribati",
  "Majuro  ",
  "Pohnpei ",
  "Kosrae  ",
];

test('accurately pads strings in array to length of longest', () => {
  expect(makeEqualLenByPad(testArray)).toEqual(targetArray);
});
