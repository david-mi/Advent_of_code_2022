import { formatedInput } from "./input/formatedInput.js";

const points = {
  scenarios: {
    "X": {
      "A": 3 + 0,
      "B": 1 + 0,
      "C": 2 + 0
    },
    "Y": {
      "A": 1 + 3,
      "B": 2 + 3,
      "C": 3 + 3
    },
    "Z": {
      "A": 2 + 6,
      "B": 3 + 6,
      "C": 1 + 6
    }
  }
};

const { scenarios } = points;

let myScore = 0;

for (const [opponentLetterShape, myLetterShape] of formatedInput) {
  myScore += scenarios[myLetterShape][opponentLetterShape];
}
