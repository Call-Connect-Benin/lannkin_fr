const https = require('https');
const urls = ['https://lannkin.com/sitemap.xml'];
const headers = { 'User-Agent': 'Mozilla/5.0' };
const fetched = new Set();
const found = new Set();
const queue = [...urls];

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk.toString(); });
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

(async () => {
  for (let i = 0; i < queue.length; i++) {
    const url = queue[i];
    if (fetched.has(url)) continue;
    fetched.add(url);
    try {
      const content = await get(url);
      const locs = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
      for (const loc of locs) {
        if (loc.endsWith('sitemap.xml') && !fetched.has(loc) && !queue.includes(loc)) {
          queue.push(loc);
        } else if (!loc.endsWith('sitemap.xml')) {
          const path = loc.replace(/^https?:\/\/[^/]+/, '');
          found.add(path);
        }
      }
    } catch (err) {
      console.error('ERROR FETCH', url, err.message);
    }
  }

  const paths = [...found].sort();
  const counts = paths.reduce((acc, path) => {
    const prefix = path.split('/').filter(Boolean)[0] || '/';
    acc[prefix] = (acc[prefix] || 0) + 1;
    return acc;
  }, {});

  console.log('URLS IN SITEMAP INDEX');
  queue.forEach((url) => console.log(' ', url));
  console.log('\nTOTAL PATHS', paths.length);
  console.log('\nPREFIX COUNTS');
  Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([prefix, count]) => console.log(prefix, count));
  console.log('\nEXAMPLE PATHS');
  paths.slice(0, 200).forEach((path) => console.log(path));
})();
