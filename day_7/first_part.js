import { input } from "./input/parsedInput.js";
import { testInputs } from "./input/parsedInputTest.js";

function makeStructure(testInput) {
  const previousLocations = [];
  const structureObject = {
    "/": {}
  };
  const splitNewLines = testInput.split(/\n/);
  let currentDirectory = structureObject["/"];

  for (const line of splitNewLines) {
    // if line contains dir
    if (line.includes("dir")) {
      const dirName = line.match(/[a-z]+$/)[0];
      currentDirectory[dirName] = {};
    }
    // if line contains numbers
    else if (/\b\d+\b/.test(line)) {
      const [fileSize, fileName] = line.match(/(\b\d+\b)|(\b[a-z].*\b)/g);
      currentDirectory[fileName + "_file"] = Number(fileSize);
    }
    // if line contains cd
    else if (line.includes("cd")) {
      const dirName = line.match(/(?<=cd\s).+/)[0];
      previousLocations.unshift(currentDirectory);

      if (dirName === "/") {
        currentDirectory = structureObject["/"];
      } else if (dirName === "..") {
        currentDirectory = previousLocations.splice(0, 2)[1];
      } else {
        currentDirectory = currentDirectory[dirName];
      }
    }
  }
  return structureObject;
}

function getRandomId() {
  return Math.round(Math.random() * 10000);
}

function getFoldersSize(structure) {
  let total = 0;

  for (const key in structure) {
    if (typeof structure[key] === "object") {
      let folder = 0;
      folder += getFoldersSize(structure[key]);
      total += folder;
      // need to add a random part to key name because multiple folders have the same name
      foldersSize[`${key}__${getRandomId()}`] = folder;
    } else {
      total += structure[key];
    }

  }
  return total;
}

function sumFoldersSizes(maxSize) {
  let totalSize = 0;

  for (const folder in foldersSize) {
    if (foldersSize[folder] <= maxSize) {
      totalSize += foldersSize[folder];
    }
  }

  return totalSize;
};

const structure = makeStructure(input);
export const foldersSize = {};
getFoldersSize(structure);
const sumOfFolderSizes = sumFoldersSizes(100_000);
