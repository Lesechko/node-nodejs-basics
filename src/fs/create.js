import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const create = async () => {
  const freshPath = join("files", "fresh.txt");
  const text = "I am fresh and young";
  const errorMessage = "FS operation failed";

  if (fs.existsSync(freshPath)) {
    throw new Error(errorMessage);
  } else {
    fs.writeFileSync(freshPath, text);
  }
};

await create();
