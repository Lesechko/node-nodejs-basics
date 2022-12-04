import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import * as path from "path";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, ...args);
};

const compress = async () => {
  const src = join("files", "fileToCompress.txt");
  const dest = join("files", "archive.gz");

  createReadStream(src)
    .pipe(createGzip())
    .pipe(createWriteStream(dest))
    .on("finish", () => {
      console.log(`Compression process done: ${src}`);
    });
};

await compress();
