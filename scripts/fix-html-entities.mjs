/**
 * Corrige les entités HTML restantes dans les fichiers MDX
 * (&rsquo; &lsquo; &ldquo; &rdquo; &hellip; &amp; &nbsp; etc.)
 */
import fs from "fs";
import path from "path";

const BLOG_DIR = path.resolve("content/blog");

const ENTITIES = [
  [/&rsquo;/g, "\u2019"],   // '
  [/&lsquo;/g, "\u2018"],   // '
  [/&rdquo;/g, "\u201D"],   // "
  [/&ldquo;/g, "\u201C"],   // "
  [/&hellip;/g, "\u2026"],  // …
  [/&amp;/g, "&"],
  [/&nbsp;/g, " "],
  [/&eacute;/g, "é"],
  [/&egrave;/g, "è"],
  [/&agrave;/g, "à"],
  [/&ccedil;/g, "ç"],
  [/&ocirc;/g, "ô"],
  [/&ucirc;/g, "û"],
  [/&icirc;/g, "î"],
  [/&ecirc;/g, "ê"],
  [/&acirc;/g, "â"],
  [/&#8217;/g, "\u2019"],
  [/&#8216;/g, "\u2018"],
  [/&#8220;/g, "\u201C"],
  [/&#8221;/g, "\u201D"],
  [/&#8211;/g, "\u2013"],
  [/&#8212;/g, "\u2014"],
  [/&#038;/g, "&"],
  [/&quot;/g, '"'],
  [/&lt;/g, "<"],
  [/&gt;/g, ">"],
];

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
let updated = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");
  const original = content;

  for (const [pattern, replacement] of ENTITIES) {
    content = content.replace(pattern, replacement);
  }

  // Aussi corriger les guillemets typographiques dans le front matter title/excerpt
  // pour éviter les problèmes YAML (remplacer ' et " par des versions simples dans le front matter)
  content = content.replace(/^(---\n[\s\S]*?\n---)/m, (frontMatter) => {
    return frontMatter
      .replace(/\u2019/g, "'")
      .replace(/\u2018/g, "'")
      .replace(/\u201C/g, '"')
      .replace(/\u201D/g, '"')
      .replace(/\u2026/g, "...")
      .replace(/\u2013/g, "-")
      .replace(/\u2014/g, " - ");
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`+ ${file}`);
    updated++;
  }
}

console.log(`\n${updated} fichiers corrigés.`);
