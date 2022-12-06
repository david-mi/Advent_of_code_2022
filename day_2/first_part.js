import { formatedInput } from "./formatedInput.js";

const points = {
  shapes: {
    "X": 1,
    "Y": 2,
    "Z": 3
  },

  scenarios: {
    "A": {
      "X": 3,
      "Y": 6,
      "Z": 0
    },
    "B": {
      "X": 0,
      "Y": 3,
      "Z": 6
    },
    "C": {
      "X": 6,
      "Y": 0,
      "Z": 3
    }
  }
};

const { shapes, scenarios } = points;

let myScore = 0;

for (const [opponentLetterShape, myLetterShape] of formatedInput) {
  myScore += shapes[myLetterShape] + scenarios[opponentLetterShape][myLetterShape];
}