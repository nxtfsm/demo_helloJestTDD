// ./__tests__/main.js
const main = require('../main');

const testArray = [
  { imgId: "chuuk_FSM",
    label: "Chuuk" },
  { imgId: "yap_FSM",
    label: "Yap" },
  { imgId: "kiritamati_RoK",
    label: "Kiribati" },
  { imgId: "majuro_RMI",
    label: "Majuro" },
  { imgId: "pohnpei_FSM",
    label: "Pohnpei" },
  { imgId: "kosrae_FSM",
    label: "Kosrae" }
];

const target = [
  { imgId: "chuuk_FSM",
    label: "Chuuk   " },
  { imgId: "yap_FSM",
    label: "Yap     " },
  { imgId: "kiritamati_RoK",
    label: "Kiribati" },
  { imgId: "majuro_RMI",
    label: "Majuro  " },
  { imgId: "pohnpei_FSM",
    label: "Pohnpei " },
  { imgId: "kosrae_FSM",
    label: "Kosrae  " }
];

test("pads 'label' attr for all obj in array to equal length", () => {
  expect(main(testArray, 'label')).toEqual(target);
});

// 1. Create clone of testArray to avoid mutating original data
// 2. Get values for all 'label' attributes in testArray
// 3. Determine longest item in labels array
// 4. Create array of all labels padded to equal longest length
// 5. Rewrite 'label' attributes in cloned testArray to padded version

module.exports = { testArray };
