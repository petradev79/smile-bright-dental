#!/usr/bin/env node

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..", "..", "..", "..");
const outputDir = join(projectRoot, "public", "images");

// Target widths by image category/name
const widthMap = {
  "hero-main": 1200,
  "hero-secondary": 800,
  "team-ana": 600,
  "team-jovana": 600,
  "team-dragan": 600,
  "services-whitening": 800,
  "services-surgery": 800,
  "services-implants": 800,
  "services-prosthetics": 800,
  "about-clinic": 800,
  "about-founder": 800,
  "testimonials-patient1": 200,
  "testimonials-patient2": 200,
  "testimonials-patient3": 200,
  "testimonials-patient4": 200,
  "differentiators": 800,
  "features": 800,
};

/**
 * Parse lib/images.ts by evaluating it as JS to extract image entries.
 * Returns array of { name, url } where name is the key used in widthMap.
 */
function parseImagesFile(content) {
  // Strip TypeScript export to get a plain object expression
  const jsCode = content
    .replace(/^export\s+const\s+images\s*=\s*/, "return ")
    .replace(/;\s*$/, ";");

  const images = new Function(jsCode)();
  const entries = [];

  for (const [category, value] of Object.entries(images)) {
    if (value.src) {
      // Flat entry (e.g. differentiators, features)
      entries.push({ name: category, url: value.src });
    } else {
      // Nested entries (e.g. hero.main, team.ana)
      for (const [key, item] of Object.entries(value)) {
        if (item.src) {
          entries.push({ name: `${category}-${key}`, url: item.src });
        }
      }
    }
  }

  return entries;
}

async function downloadImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function processImage(name, url, width) {
  console.log(`Processing ${name} (${width}px) from ${url}...`);

  const originalBuffer = await downloadImage(url);
  const originalSize = originalBuffer.length;

  const optimizedBuffer = await sharp(originalBuffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  const outputPath = join(outputDir, `${name}.webp`);
  await writeFile(outputPath, optimizedBuffer);

  const optimizedSize = optimizedBuffer.length;
  const savings = (
    ((originalSize - optimizedSize) / originalSize) *
    100
  ).toFixed(1);

  return {
    name,
    path: `/images/${name}.webp`,
    originalSize,
    optimizedSize,
    savings: `${savings}%`,
  };
}

async function main() {
  // Read and parse lib/images.ts
  const imagesPath = join(projectRoot, "lib", "images.ts");
  const content = await readFile(imagesPath, "utf-8");
  const entries = parseImagesFile(content);

  if (entries.length === 0) {
    console.error("No images found in lib/images.ts");
    process.exit(1);
  }

  console.log(`Found ${entries.length} images to process.\n`);

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true });

  // Process all images
  const results = [];
  for (const entry of entries) {
    const width = widthMap[entry.name] || 800;
    try {
      const result = await processImage(entry.name, entry.url, width);
      results.push(result);
      console.log(
        `  -> ${result.path} (${formatBytes(result.originalSize)} -> ${formatBytes(result.optimizedSize)}, ${result.savings} smaller)\n`
      );
    } catch (error) {
      console.error(`  ERROR processing ${entry.name}: ${error.message}\n`);
      results.push({ name: entry.name, error: error.message });
    }
  }

  // Print summary
  console.log("\n=== Summary ===");
  console.log(JSON.stringify(results, null, 2));

  const successful = results.filter((r) => !r.error);
  const totalOriginal = successful.reduce(
    (sum, r) => sum + r.originalSize,
    0
  );
  const totalOptimized = successful.reduce(
    (sum, r) => sum + r.optimizedSize,
    0
  );
  console.log(
    `\nProcessed ${successful.length}/${entries.length} images successfully.`
  );
  console.log(
    `Total: ${formatBytes(totalOriginal)} -> ${formatBytes(totalOptimized)} (${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}% smaller)`
  );
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
