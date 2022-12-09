import { parsedInput } from "./input/parsedInput.js";
import { parsedInputTest } from "./input/parsedInputTest.js";

function getVisibleTrees(input) {
  let visibleTreeCount = 0;
  // helps to visualize which tree are visible
  const visibleTrees = {};

  for (let y = 0; y < input.length; y++) {
    const currentLine = input[y];

    xLoop: for (let x = 0; x < currentLine.length; x++) {
      const currentTreeHeight = Number(currentLine[x]);

      // if tree is on a edge, add it to visible trees
      if (
        y === 0 ||
        y === input.length - 1 ||
        x === 0 ||
        x === currentLine.length - 1
      ) {
        visibleTreeCount++;
        // helps to visualize which tree are visible
        visibleTrees[`${y}, ${x}`] = currentTreeHeight;
      }
      else {
        // check at the left of current tree if any tree is bigger
        let hasFoundBiggerTreeInTheLeft = false;

        for (let leftX = x - 1; leftX >= 0; leftX--) {
          const currentLeftXHeight = Number(currentLine[leftX]);

          if (currentLeftXHeight >= currentTreeHeight) {
            hasFoundBiggerTreeInTheLeft = true;
            break;
          }
        }

        if (hasFoundBiggerTreeInTheLeft === false) {
          visibleTrees[`${y}, ${x}`] = currentTreeHeight;
          visibleTreeCount++;
          continue xLoop;
        }

        //check at the right of current tree is any tree is bigger
        let hasFoundBiggerTreeInTheRight = false;

        for (let rightX = x + 1; rightX < currentLine.length; rightX++) {
          const currentRightXHeight = Number(currentLine[rightX]);

          if (currentRightXHeight >= currentTreeHeight) {
            hasFoundBiggerTreeInTheRight = true;
            break;
          }
        }

        if (hasFoundBiggerTreeInTheRight === false) {
          visibleTrees[`${y}, ${x}`] = currentTreeHeight;
          visibleTreeCount++;
          continue xLoop;
        }

        // check above the current tree if any tree is bigger
        let hasFoundBiggerTreeAbove = false;

        for (let topX = y - 1; topX >= 0; topX--) {
          const currentTopXHeight = Number(input[topX][x]);

          if (currentTopXHeight >= currentTreeHeight) {
            hasFoundBiggerTreeAbove = true;
            break;
          }
        }

        if (hasFoundBiggerTreeAbove === false) {
          visibleTrees[`${y}, ${x}`] = currentTreeHeight;
          visibleTreeCount++;
          continue xLoop;
        }

        // check below the current tree if any tree is bigger
        let hasFoundBiggerTreeBelow = false;

        for (let bottomX = y + 1; bottomX < input.length; bottomX++) {
          const currentBottomXHeight = Number(input[bottomX][x]);

          if (currentBottomXHeight >= currentTreeHeight) {
            hasFoundBiggerTreeBelow = true;
            break;
          }
        }

        if (hasFoundBiggerTreeBelow === false) {
          visibleTrees[`${y}, ${x}`] = currentTreeHeight;
          visibleTreeCount++;
        }
      }
    }
  }

  return visibleTreeCount;
}

console.time();
const visibleCount = getVisibleTrees(parsedInput); // 20ms
console.timeEnd();
debugger;