/**
 * Pred buildom vygeneruje menšiu verziu hero obrázka (800px šírka) pre responzívne načítanie.
 * Spúšťa sa cez: node scripts/resize-hero.mjs
 */
import sharp from "sharp";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "src", "assets", "audit-webu.jpg");
const out = join(root, "src", "assets", "audit-webu-800.jpg");

if (!existsSync(src)) {
  console.warn("scripts/resize-hero.mjs: audit-webu.jpg neexistuje, preskakujem.");
  process.exit(0);
}

await sharp(src)
  .resize(800, null, { withoutEnlargement: true })
  .jpeg({ quality: 82 })
  .toFile(out);
console.log("scripts/resize-hero.mjs: audit-webu-800.jpg vytvorený.");
process.exit(0);
