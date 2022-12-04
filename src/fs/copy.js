import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, ...args);
};

const copy = async () => {
  const dist = join("files_copy");
  const sourse = join("files");
  const errorMessage = "FS operation failed";

  if (fs.existsSync(dist)) {
    throw new Error(errorMessage);
  }

  const copyAsync = (sourse, dist) => {
    const exists = fs.existsSync(sourse);
    const stats = exists && fs.statSync(sourse);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
      fs.mkdirSync(dist);
      fs.readdirSync(sourse).forEach((name) => {
        copyAsync(path.join(sourse, name), path.join(dist, name));
      });
    } else {
      fs.copyFileSync(sourse, dist);
    }
  };

  copyAsync(sourse, dist);
};

copy();
