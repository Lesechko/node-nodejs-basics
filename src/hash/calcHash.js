import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { createHash } from "node:crypto";

const join = (...args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, ...args);
};

const calculateHash = async () => {
  const filePath = join("files", "fileToCalculateHashFor.txt");
  const errorMessage = "FS operation failed";

  fs.readFile(filePath, {}, (err, data) => {
    if (err) {
      throw new Error(errorMessage);
    }

    if (data) {
      const hex = createHash("sha3-256").update(data).digest("hex");
      console.log(hex);
    }
  });
};

await calculateHash();
