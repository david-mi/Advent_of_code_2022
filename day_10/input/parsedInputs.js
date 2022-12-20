import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pathToInput = path.join(dirname, "input.txt");
const pathToTestInput = path.join(dirname, "test_input.txt");

const input = fs.readFileSync(pathToInput, { encoding: "utf-8" });
const testInput = fs.readFileSync(pathToTestInput, { encoding: "utf-8" });

export const parsedInput = parseInput(input);
export const parsedTestInput = parseInput(testInput);

function parseInput(textInput) {
  return textInput
    .split(/\n/)
    .map(input => {
      return input.startsWith("addx")
        ? input.split(" ")
        : [input];
    });
}