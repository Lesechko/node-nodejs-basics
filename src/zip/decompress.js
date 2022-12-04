import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { fileURLToPath } from "url";
import * as path from "path";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, ...args);
};

const decompress = async () => {
  const dest = join("files", "fileToCompress2.txt");
  const src = join("files", "archive.gz");

  createReadStream(src)
    .pipe(createUnzip())
    .pipe(createWriteStream(dest))
    .on("finish", () => {
      console.log(`Decompression process done: ${src}`);
    });
};

await decompress();
