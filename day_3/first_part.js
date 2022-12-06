import { input } from "./input/input.js";
import { findLetterPriority } from "./utils.js";

let letterPrioritiesSum = 0;

const rucksacks = input.split(/\n/);
for (const rucksack of rucksacks) {
  let firstCompartment = {};
  let secondCompartment = {};

  for (let i = 0; i < rucksack.length; i++) {
    const currentLetter = rucksack[i];

    if (i < rucksack.length / 2) {
      firstCompartment[currentLetter] = currentLetter;
    } else {
      secondCompartment[currentLetter] = currentLetter;
    }

    if (firstCompartment[currentLetter] === secondCompartment[currentLetter]) {
      const letterPriority = findLetterPriority(currentLetter);
      letterPrioritiesSum += letterPriority;
      delete firstCompartment[currentLetter];
    }
  }
}