
import fs from 'node:fs';
import path from 'node:path';

export function getPublicImages(offset = 0, limit?: number): string[] {
  const dir = path.join(process.cwd(), 'public/images/paintings');
  const files = fs.readdirSync(dir)
    .filter(f => /\.(png|jpe?g|webp|png)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(f => `/images/paintings/${f}`);

  if (limit !== undefined) {
    return files.slice(offset, offset + limit);
  }
  return files.slice(offset);
}
