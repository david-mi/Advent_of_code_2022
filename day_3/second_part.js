import { input } from "./input.js";
import { findLetterPriority } from "./utils.js";

let letterPrioritiesSum = 0;
const rucksacks = input.split(/\n/);

for (let i = 0; i < rucksacks.length; i += 3) {
  let firstElve = {};
  let secondElve = {};
  let thirdElve = {};

  groupofthree: for (let j = i, count = 0; j <= i + 3; j++, count++) {

    for (let k = 0; k < rucksacks[j].length; k++) {
      const currentLetter = rucksacks[j][k];

      if (count === 0) {
        firstElve[currentLetter] = currentLetter;
      } else if (count === 1) {
        secondElve[currentLetter] = currentLetter;
      } else {
        thirdElve[currentLetter] = currentLetter;
        if (
          firstElve[currentLetter] &&
          secondElve[currentLetter] &&
          thirdElve[currentLetter]
        ) {
          const letterPriority = findLetterPriority(currentLetter);
          letterPrioritiesSum += letterPriority;
          break groupofthree;
        }
      }
    }
  }
}
