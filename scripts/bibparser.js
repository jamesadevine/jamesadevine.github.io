
import fs from 'fs';

let accolades = {
    moskal2021web: "best_paper",
    seyed2021rethinking: "honorable_mention",
    devine2022plug: "distinguished_paper",
};

let patents = {
    helmes2024computer: "patent",
    hodges2023electronic: "patent",
    hodges2025electronicinteroperability: "patent",
    hodges2025electronic: "patent",
    hodges2024modular: "patent",
};


// Function to parse a simple BibTeX file to JSON
function parseBibTeX(bibtexContent) {
  const publications = [];
  const entries = bibtexContent.split('@').filter(entry => entry.trim());
  let counter = 0;
  entries.forEach(entry => {
    const lines = entry.split('\n');
    const type = lines[0].split('{')[0].toLowerCase();
    const key = lines[0].split('{')[1]?.replace(',', '');

    if (!type || !key) return;

    const publication = {
      id: counter++,
      key,
      type: mapBibTeXType(type),
      title: '',
      authors: [],
      year: new Date().getFullYear(),
      venue: '',
      pub_type: patents[key] ? "patent" : "paper",
      accolades: accolades[key] || "none"
    };

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('title')) {
        publication.title = extractValue(trimmed);
      } else if (trimmed.startsWith('author')) {
        publication.authors = extractValue(trimmed).split(' and ');
      } else if (trimmed.startsWith('year')) {
        publication.year = parseInt(extractValue(trimmed)) || new Date().getFullYear();
      } else if (trimmed.startsWith('journal') || trimmed.startsWith('booktitle')) {
        publication.venue = extractValue(trimmed);
      } else if (trimmed.startsWith('url')) {
        publication.url = extractValue(trimmed);
      }
    });



    if (publication.title) {
      publications.push(publication);
    }
  });

  return publications;
}

function extractValue(line) {
  const match = line.match(/=\s*{(.+)},?$/);
  return match ? match[1].replace(/[{}]/g, '') : '';
}

function mapBibTeXType(bibType) {
  const typeMap = {
    'article': 'journal',
    'inproceedings': 'conference',
    'incollection': 'book',
    'phdthesis': 'thesis',
    'mastersthesis': 'thesis',
    'techreport': 'preprint',
    'misc': 'preprint'
  };
  return typeMap[bibType] || 'journal';
}

// Usage
const bibtexFile = './publications.bib'; // Place your exported BibTeX file here
const outputPath = '../public/publications.json';

if (fs.existsSync(bibtexFile)) {
  const bibtexContent = fs.readFileSync(bibtexFile, 'utf8');
  const publications = parseBibTeX(bibtexContent);
  fs.writeFileSync(outputPath, JSON.stringify(publications, null, 2));

  console.log(`✅ Converted ${publications.length} publications to JSON`);
} else {
  console.log('❌ BibTeX file not found. Please export your publications from Google Scholar as BibTeX and save as publications.bib');
}