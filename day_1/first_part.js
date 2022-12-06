import { input } from "./input/input.js";

export const elfSumCaloriesDescendingOrder =
  input.split(/\n{2,}/)
    .map(elfCalories => {
      return elfCalories.split(/\n/)
        .map(Number)
        .reduce((totalCalories, calories) => totalCalories + calories);
    })
    .sort((a, b) => b - a);

const biggestCaloriesFromOneElve = elfSumCaloriesDescendingOrder[0];