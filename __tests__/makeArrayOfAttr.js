// ./__tests__/makeArrayOfAttr.js
const makeArrayOfAttr = require('../makeArrayOfAttr');
const { testArray } = require('./main');
const testKey = 'label';
const target = ["Chuuk", "Yap", "Kiribati", "Majuro", "Pohnpei", "Kosrae"];

test(`creates array from "${testKey}" attributes in 'location' array`, () => {
  const result = makeArrayOfAttr(testArray, testKey);

  expect(result).toEqual(target);
  expect(result).not.toBe(target);
  expect(result[0]).toEqual(target[0]);
  expect(typeof result[0]).toBe('string');
  expect(result[0]).toBe(target[0]);

});
