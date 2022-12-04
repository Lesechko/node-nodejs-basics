import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const list = async () => {
  const filesPath = join("files");
  const errorMessage = "FS operation failed";

  if (!fs.existsSync(filesPath)) {
    throw new Error(errorMessage);
  }

  const filenames = fs.readdirSync(filesPath);
  filenames.forEach((name) => console.log(name));
};

await list();
