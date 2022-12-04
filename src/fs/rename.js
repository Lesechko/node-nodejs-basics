import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const rename = async () => {
  const wrong = join("files", "wrongFilename.txt");
  const proper = join("files", "properFilename.md");
  const errorMessage = "FS operation failed";

  if (!fs.existsSync(wrong) || fs.existsSync(proper)) {
    throw new Error(errorMessage);
  }

  fs.renameSync(wrong, proper);
};

await rename();
