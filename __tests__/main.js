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

const targetArray = [
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
  expect(main(testArray)).toEqual(targetArray);
});

// 1. Get values for all 'label' attributes in testArray
// 2. Determine longest item in labels array
// 3. Create array of all labels padded to equal longest length
// 4. Rewrite 'label' attributes in testArray to padded version
