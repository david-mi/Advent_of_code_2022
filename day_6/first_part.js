import { input } from "./input/parsedInput.js";
import { testInputs } from "./input/parsedInputTest.js";

console.log({ input });
console.log(testInputs);

export function getFirstMarker(str, markerLength) {
  for (let i = 0; i < str.length - 3; i++) {
    const currentStr = str.slice(i, i + markerLength);
    const setSize = new Set(currentStr).size;

    if (setSize === markerLength) {
      return i + markerLength;
    }
  }
}

const partOneMarker = getFirstMarker(input, 4);
