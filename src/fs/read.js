import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const read = async () => {
  const filePath = join("files", "fileToRead.txt");
  const errorMessage = "FS operation failed";

  try {
    const fileContent = fs.readFileSync(filePath).toString();
    console.log(fileContent);
  } catch {
    throw new Error(errorMessage);
  }
};

await read();
