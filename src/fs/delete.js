import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const remove = async () => {
  const path = join("files", "fileToRemove.txt");
  const errorMessage = "FS operation failed";

  try {
    fs.unlinkSync(path);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
