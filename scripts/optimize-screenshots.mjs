import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC_ROOT = path.resolve('public/projects screenshots');
const DEST_ROOT = path.resolve('public/projects');

const MAPPING = [
  ['AzharUniversityDashboard', 'al-azhar-dashboard'],
  ['AzharUniversityWebsite', 'al-azhar-website'],
  ['AzharRanking', 'azhar-ranking'],
  ['Quality Vision', 'quality-of-visions'],
  ['PaxiDashboard', 'paxi-dashboard'],
  ['paxiWebsite', 'paxigo-website'],
  ['UlmCareWebsite', 'ulm-care'],
  ['UlmConnectWebsite', 'ulmconnect'],
];

const manifest = {};
let totalIn = 0;
let totalOut = 0;

for (const [srcFolder, slug] of MAPPING) {
  const srcDir = path.join(SRC_ROOT, srcFolder);
  if (!fs.existsSync(srcDir)) continue;
  const files = fs
    .readdirSync(srcDir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (!files.length) continue;

  const outDir = path.join(DEST_ROOT, slug);
  fs.mkdirSync(outDir, { recursive: true });
  manifest[slug] = [];

  for (let i = 0; i < files.length; i++) {
    const srcPath = path.join(srcDir, files[i]);
    const outName = `${String(i + 1).padStart(2, '0')}.webp`;
    const outPath = path.join(outDir, outName);
    totalIn += fs.statSync(srcPath).size;

    await sharp(srcPath)
      .resize(1600, 1000, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);

    totalOut += fs.statSync(outPath).size;
    manifest[slug].push(`/projects/${slug}/${outName}`);
  }
}

console.log(
  JSON.stringify(
    {
      counts: Object.fromEntries(Object.entries(manifest).map(([k, v]) => [k, v.length])),
      totalInMB: (totalIn / 1024 / 1024).toFixed(2),
      totalOutMB: (totalOut / 1024 / 1024).toFixed(2),
    },
    null,
    2,
  ),
);
