// ./__tests__/makeArrayOfAttr.js
const makeArrayOfAttr = require('../makeArrayOfAttr');
const testArray = require('./main');
const target = ["Chuuk", "Yap", "Kiribati", "Majuro", "Pohnpei", "Kosrae"];

test("creates array from 'label' attributes in 'location' array", () => {
  expect(makeArrayOfAttr(testArray, 'label')).toEqual(target);
});
