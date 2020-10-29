// ./__tests__/makeArrayOfAttr.js
const makeArrayOfAttr = require('../makeArrayOfAttr');
const { testArray } = require('./main');
const testKey = 'label';
const target = ["Chuuk", "Yap", "Kiribati", "Majuro", "Pohnpei", "Kosrae"];
const fallbackArray = [
  { foo: 'bar',
    label: 'Chuuk' },
  { foo: 'bar',
    label: 'Yap' },
  { foo: 'bar',
    label: 'Kiribati' },
  { foo: 'bar',
    label: 'Majuro' },
  { foo: 'bar',
    label: 'Pohnpei' },
  { foo: 'bar',
    label: 'Kosrae' }
];

test("creates array from 'label' attributes in 'location' array", () => {
  const result = makeArrayOfAttr(testArray, testKey);

  expect(result).toEqual(target);
  expect(result).not.toBe(target);
  expect(result[0]).toEqual(target[0]);

  //try { expect(makeArrayOfAttr(testArray, testKey)).toEqual(target); }
  //catch { expect(makeArrayOfAttr(fallbackArray, testKey)).toEqual(target); }
});
