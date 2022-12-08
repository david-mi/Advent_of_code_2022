import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pathToInput = path.join(dirname, "input.txt");

export let input = "";

try {
  input = fs.readFileSync(pathToInput, { encoding: "utf-8" });
  console.log(input);
} catch (err) {
  console.log(err);
}
