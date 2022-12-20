import { parsedInput, parsedTestInput } from "./input/parsedInputs.js";

function getSignalStrength(input) {
  let x = 1;
  let cycleCount = 0;
  let signalStrength = 0;

  function checkCycleCount(xValue) {
    if (cycleCount === 20 || cycleCount > 20 && (cycleCount - 20) % 40 === 0) {
      signalStrength += cycleCount * xValue;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === "noop") {
      cycleCount++;
    } else {
      for (let j = 0; j < 2; j++) {
        cycleCount++;
        checkCycleCount(x);
      }
      x += parseInt(input[i][1], 10);
      continue;
    }

    checkCycleCount(x);
  }

  return signalStrength;
}

const signalStrength = getSignalStrength(parsedInput);