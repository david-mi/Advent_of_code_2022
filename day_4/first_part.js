import { formatedInput } from "./input/formatedInput.js";

let containCount = 0;

for (const [firstPair, secondPair] of formatedInput) {
  if (
    firstPair[0] >= secondPair[0] && firstPair[0] <= secondPair[1] &&
    firstPair[1] >= secondPair[0] && firstPair[1] <= secondPair[1]
    ||
    secondPair[0] >= firstPair[0] && secondPair[0] <= firstPair[1] &&
    secondPair[1] >= firstPair[0] && secondPair[1] <= firstPair[1]
  ) {
    containCount++;
  }
}