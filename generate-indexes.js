#!/usr/bin/env node
// generate-indexes.js
// Uruchamia się automatycznie przy każdym deploymencie na Netlify.
// Skanuje foldery content/ i tworzy pliki index.json z listą plików.
// Dzięki temu strona zawsze wyświetla WSZYSTKIE wpisy dodane przez CMS.

const fs = require('fs');
const path = require('path');

const folders = [
  'content/news',
  'content/blog',
  'content/travel'
];

folders.forEach(folder => {
  const fullPath = path.join(__dirname, folder);

  if (!fs.existsSync(fullPath)) {
    console.log(`Folder nie istnieje: ${folder} — pomijam`);
    return;
  }

  const files = fs.readdirSync(fullPath)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse(); // najnowsze pierwsze (sortowanie po nazwie pliku YYYY-MM-DD-)

  const indexPath = path.join(fullPath, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(files, null, 2));
  console.log(`✓ ${folder}/index.json — ${files.length} plików: ${files.join(', ')}`);
});

console.log('\n✅ Indeksy wygenerowane pomyślnie.');
