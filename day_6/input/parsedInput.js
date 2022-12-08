import fs from "fs";

export let input = "";

try {
  input = fs.readFileSync("day_6/input/input.txt", { encoding: "utf-8" });
  console.log(input);
} catch (err) {
  console.log(err);
}

