import path from "node:path";
import { mkdir, readdir, stat } from "node:fs/promises";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "cases");
const outputDir = path.join(process.cwd(), "public", "cases-optimized");
const imagePattern = /\.(jpe?g|png)$/i;

await mkdir(outputDir, { recursive: true });

const files = await readdir(inputDir);
const images = files.filter((file) => imagePattern.test(file));

await Promise.all(
  images.map(async (file) => {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace(imagePattern, ".webp");
    const outputPath = path.join(outputDir, outputFile);

    await sharp(inputPath)
      .rotate()
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outputPath);
  })
);

const beforeBytes = (
  await Promise.all(images.map((file) => stat(path.join(inputDir, file))))
).reduce((sum, file) => sum + file.size, 0);

const optimizedFiles = await readdir(outputDir);
const afterBytes = (
  await Promise.all(optimizedFiles.map((file) => stat(path.join(outputDir, file))))
).reduce((sum, file) => sum + file.size, 0);

const formatMb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)}MB`;

console.log(`Optimized ${images.length} images`);
console.log(`Before: ${formatMb(beforeBytes)}`);
console.log(`After: ${formatMb(afterBytes)}`);
