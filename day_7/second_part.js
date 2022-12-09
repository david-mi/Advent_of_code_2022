import { foldersSize } from "./first_part.js";

function getUnusedSpaceSize(maxSize) {
  for (const folder in foldersSize) {
    if (folder.startsWith("/")) {
      return maxSize - foldersSize[folder];
    }
  }
}

function getMinimumSpaceToGain(minimumUnusedSpace, unusedSpace) {
  return minimumUnusedSpace - unusedSpace;
}

function findFolderToDelete(minimumSpaceToGain) {
  const folderToDelete = {
    name: null,
    size: Infinity
  };

  for (const folder in foldersSize) {
    if (foldersSize[folder] >= minimumSpaceToGain && foldersSize[folder] < folderToDelete.size) {
      folderToDelete.name = folder;
      folderToDelete.size = foldersSize[folder];
    }
  }

  return folderToDelete;
}

const unusedSpace = getUnusedSpaceSize(70_000_000);
const minimumSpaceToGain = getMinimumSpaceToGain(30_000_000, unusedSpace);
const folderToDelete = findFolderToDelete(minimumSpaceToGain);
const folderToDeleteSize = folderToDelete.size;
