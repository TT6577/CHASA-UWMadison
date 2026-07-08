import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, basename, extname } from 'path';

const folders = [
  'src/assets/events/lny',
  'src/assets/events/midautumn',
  'src/assets/events/gbms',
  'src/assets/events/fam events',
  'src/assets/events/volunteer',
  'src/assets/history'
];

for (const folder of folders) {
  const files = readdirSync(folder).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    const input = join(folder, file);
    const output = join(folder, basename(file, extname(file)) + '.webp');
    await sharp(input)
      .resize(1200, null, { withoutEnlargement: true })  // max 1200px wide, keep ratio
      .webp({ quality: 82 })
      .toFile(output);
    console.log(`✓ ${file} → ${basename(output)}`);
  }
}

console.log('done!');