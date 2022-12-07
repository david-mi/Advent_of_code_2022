import { stackObject, endRange } from "./input/formatedStackInput.js";
import { actions } from "./input/formatedActions.js";

import { stackObjectTest, endRangeTest } from "./input/formatedStackInputTest.js";
import { actionsTest } from "./input/formatedActionsTest.js";


export function moveCrates(reverse) {
  const stackObjectCopy = structuredClone(stackObject);

  for (const [move, from, to] of actions) {
    const removedCrates = stackObjectCopy[from]
      .splice(0, move);

    if (reverse) {
      removedCrates.reverse();
    }

    stackObjectCopy[to].unshift(...removedCrates);
  }

  return stackObjectCopy;
}

export function getTopOfEachStack(movedStackedObject) {
  let result = "";

  for (let i = 1; i <= endRange; i++) {
    if (movedStackedObject[i].length > 0) {
      result += movedStackedObject[i][0];
    }
  }

  return result;
}

const movedStackedObject = moveCrates(true);
const topOfEachStack = getTopOfEachStack(movedStackedObject);
