import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const filesToCopy = [
  'index.html',
  'site.webmanifest',
  'sw.js',
  'icon.svg'
];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const file of filesToCopy) {
  await cp(path.join(rootDir, file), path.join(distDir, file));
}

await cp(path.join(rootDir, 'icons'), path.join(distDir, 'icons'), { recursive: true });

console.log(`Web-Dateien nach ${distDir} kopiert.`);
