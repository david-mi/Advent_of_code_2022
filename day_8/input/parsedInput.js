import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pathToInput = path.join(dirname, "input.txt");

let input = "";
export let parsedInput = "";

try {
  input = fs.readFileSync(pathToInput, { encoding: "utf-8" });
  parsedInput = input.split(/\n/);
} catch (err) {
  console.log(err);
}
