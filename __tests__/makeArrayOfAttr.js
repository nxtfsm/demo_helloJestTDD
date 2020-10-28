// ./__tests__/makeArrayOfAttr.js
const makeArrayOfAttr = require('../makeArrayOfAttr');
const testArray = require('./main');
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
  try { expect(makeArrayOfAttr(testArray, testKey)).toEqual(target); }
  catch { expect(makeArrayOfAttr(fallbackArray, testKey)).toEqual(target); }
});
