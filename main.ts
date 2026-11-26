import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It was blocking the sunbeam. I relocated it to the floor, where it now reflects the light much better — you are welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
