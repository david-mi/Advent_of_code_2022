import { parsedInput } from "./input/parsedInput.js";
import { parsedInputTest } from "./input/parsedInputTest.js";

function getVisibleTrees(input) {
  // helps to visualize which tree are visible
  let biggestScenicScore = 0;

  for (let y = 0; y < input.length; y++) {
    const currentLine = input[y];

    for (let x = 0; x < currentLine.length; x++) {
      const currentTreeHeight = Number(currentLine[x]);

      // dont take edges into consideration
      if (
        y !== 0 &&
        y !== input.length - 1 &&
        x !== 0 &&
        x !== currentLine.length - 1
      ) {
        const treeScenicInfos = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };

        // check tree sizes on the left of current tree
        for (let leftX = x - 1; leftX >= 0; leftX--) {
          const currentLeftXHeight = Number(currentLine[leftX]);
          treeScenicInfos.left++;

          if (currentLeftXHeight >= currentTreeHeight) {
            break;
          }
        }

        // check tree sizes on the right of current tree
        for (let rightX = x + 1; rightX < currentLine.length; rightX++) {
          const currentRightXHeight = Number(currentLine[rightX]);
          treeScenicInfos.right++;

          if (currentRightXHeight >= currentTreeHeight) {
            break;
          }
        }

        // check tree sizes above the current tree
        for (let topX = y - 1; topX >= 0; topX--) {
          const currentTopXHeight = Number(input[topX][x]);
          treeScenicInfos.top++;

          if (currentTopXHeight >= currentTreeHeight) {
            break;
          }
        }

        // check tree sizes below the current tree
        for (let bottomX = y + 1; bottomX < input.length; bottomX++) {
          const currentBottomXHeight = Number(input[bottomX][x]);
          treeScenicInfos.bottom++;

          if (currentBottomXHeight >= currentTreeHeight) {
            break;
          }
        }

        const treeScenicScore = Object.values(treeScenicInfos).reduce((total, score) => total * score);
        if (treeScenicScore > biggestScenicScore) {
          biggestScenicScore = treeScenicScore;
        }
      };
    }
  }

  return biggestScenicScore;
}

const biggestScenicScore = getVisibleTrees(parsedInput);