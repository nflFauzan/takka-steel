/**
 * convert-to-webp.mjs
 * Converts all .png/.jpg/.jpeg files in /public to .webp
 * Keeps originals as backup. Prints size comparison.
 */
import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  console.log(`\n🔍 Ditemukan ${files.length} gambar untuk dikonversi\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of files) {
    const ext = path.extname(filePath);
    const webpPath = filePath.replace(new RegExp(`\\${ext}$`, "i"), ".webp");
    const backupPath = filePath + ".bak";

    const beforeStat = await stat(filePath);
    const beforeKB = (beforeStat.size / 1024).toFixed(1);

    // Quality: 82 = good balance between quality and size
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);

    const afterStat = await stat(webpPath);
    const afterKB = (afterStat.size / 1024).toFixed(1);
    const saving = (
      ((beforeStat.size - afterStat.size) / beforeStat.size) *
      100
    ).toFixed(0);

    totalBefore += beforeStat.size;
    totalAfter += afterStat.size;

    // Rename original to .bak (keep as backup)
    await rename(filePath, backupPath);

    const rel = path.relative(PUBLIC_DIR, filePath);
    console.log(
      `  ✅ ${rel.padEnd(45)} ${beforeKB.padStart(7)} KB → ${afterKB.padStart(7)} KB  (-${saving}%)`
    );
  }

  const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(2);
  const totalAfterMB = (totalAfter / 1024 / 1024).toFixed(2);
  const totalSaving = (
    ((totalBefore - totalAfter) / totalBefore) *
    100
  ).toFixed(0);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 RINGKASAN KONVERSI
   Sebelum : ${totalBeforeMB} MB
   Sesudah : ${totalAfterMB} MB
   Hemat   : ${totalSaving}% lebih ringan 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Original disimpan sebagai .bak (bisa dihapus manual)
`);
}

main().catch(console.error);
