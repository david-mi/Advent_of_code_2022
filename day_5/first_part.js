import { stackObject, endRange } from "./input/formatedStackInput.js";
import { actions } from "./input/formatedActions.js";

import { stackObjectTest, endRangeTest } from "./input/formatedStackInputTest.js";
import { actionsTest } from "./input/formatedActionsTest.js";

export function moveCrates(reverse) {
  for (const [move, from, to] of actions) {
    const removedCrates = stackObject[from]
      .splice(0, move);

    if (reverse) {
      removedCrates.reverse();
    }

    stackObject[to].unshift(...removedCrates);
  }
}

function getTopOfEachStack() {
  let result = "";

  for (let i = 1; i <= endRange; i++) {
    if (stackObject[i].length > 0) {
      result += stackObject[i][0];
    }
  }

  return result;
}

moveCrates(false);
const topOfEachStack = getTopOfEachStack();
