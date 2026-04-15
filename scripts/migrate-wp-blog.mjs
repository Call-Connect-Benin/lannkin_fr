/**
 * Migration WordPress → MDX
 * Récupère tous les articles du blog ekolink.fr via l'API REST WordPress
 * et les convertit en fichiers MDX pour le site Next.js.
 */
import fs from "fs";
import path from "path";
import TurndownService from "turndown";

const WP_API = "https://www.ekolink.fr/wp-json/wp/v2";
const OUTPUT_DIR = path.resolve("content/blog");

// Mapping catégories WordPress → catégories Next.js
const CATEGORY_MAP = {
  92: "google-ads",        // Google Ads
  93: "ecommerce",         // Shopify
  94: "marketing-digital", // Native Ads
  91: "conception-web",    // WordPress
  69: "graphisme",         // Branding & Image
  68: "marketing-digital", // Analyse & Optimisation
  67: "seo",               // SEO & Référencement
  66: "marketing-digital", // Marketing Digital & Stratégie
  57: "reseaux-sociaux",   // Design Graphique et Créativité (vidéo/CapCut)
  58: "conception-web",    // Sécurité et Confidentialité en Ligne
  56: "marketing-digital", // Stratégies de Marketing Numérique
  95: "google-my-business",// Fiche Google My Business
  1:  "marketing-digital", // Par defaut / Uncategorized
};

// Priorité des catégories (plus spécifique = prioritaire)
const CATEGORY_PRIORITY = [
  "google-ads", "ecommerce", "seo", "google-my-business",
  "reseaux-sociaux", "graphisme", "conception-web", "marketing-digital",
];

function mapCategory(wpCategoryIds) {
  const mapped = wpCategoryIds
    .map((id) => CATEGORY_MAP[id])
    .filter(Boolean);

  if (mapped.length === 0) return "marketing-digital";

  // Retourner la catégorie la plus spécifique
  for (const cat of CATEGORY_PRIORITY) {
    if (mapped.includes(cat)) return cat;
  }
  return mapped[0];
}

function estimateReadTime(text) {
  const words = text.replace(/<[^>]+>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

function cleanExcerpt(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .replace(/&hellip;/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/\[&hellip;\]/g, "...")
    .replace(/\[\.\.\.\]/g, "...")
    .trim()
    .substring(0, 300);
}

async function fetchAllPosts() {
  let allPosts = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `${WP_API}/posts?per_page=${perPage}&page=${page}&_fields=id,title,slug,excerpt,date,categories,content,tags`;
    console.log(`  Fetching page ${page}...`);

    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 400) break; // Plus de pages
      throw new Error(`API error: ${res.status}`);
    }

    const posts = await res.json();
    if (posts.length === 0) break;

    allPosts = allPosts.concat(posts);

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1");
    if (page >= totalPages) break;
    page++;
  }

  return allPosts;
}

async function fetchTags(tagIds) {
  if (!tagIds || tagIds.length === 0) return [];
  try {
    const res = await fetch(`${WP_API}/tags?include=${tagIds.join(",")}&_fields=name`);
    if (!res.ok) return [];
    const tags = await res.json();
    return tags.map((t) => t.name);
  } catch {
    return [];
  }
}

async function migrate() {
  console.log("Migration WordPress → MDX\n");

  // Créer le dossier de sortie
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Configurer Turndown (HTML → Markdown)
  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  // Garder les iframes (vidéos YouTube, etc.)
  turndown.addRule("iframe", {
    filter: "iframe",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      if (src.includes("youtube")) {
        return `\n\n<iframe src="${src}" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>\n\n`;
      }
      return "";
    },
  });

  // Supprimer les images WordPress internes (hébergées sur ekolink.fr)
  // car elles ne seront pas migrées
  turndown.addRule("wpImages", {
    filter: (node) => {
      return node.nodeName === "IMG";
    },
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "";
      // Garder l'image si c'est une URL externe utile
      if (src && !src.includes("ekolink.fr") && !src.includes("wp-content")) {
        return `![${alt}](${src})`;
      }
      // Supprimer les images WP internes (non migrées)
      return "";
    },
  });

  // Supprimer les figures vides
  turndown.addRule("emptyFigure", {
    filter: (node) => {
      return node.nodeName === "FIGURE" && !node.textContent.trim();
    },
    replacement: () => "",
  });

  // Récupérer tous les articles
  console.log("Récupération des articles WordPress...");
  const posts = await fetchAllPosts();
  console.log(`  ${posts.length} articles trouvés\n`);

  let created = 0;
  let skipped = 0;

  for (const post of posts) {
    const slug = post.slug;
    const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`);

    // Ne pas écraser un article existant
    if (fs.existsSync(outputPath)) {
      console.log(`  ⊘ ${slug} (déjà existant)`);
      skipped++;
      continue;
    }

    const title = post.title.rendered
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, "–")
      .replace(/&#8212;/g, "—")
      .replace(/&#038;/g, "&")
      .replace(/&quot;/g, '"');

    const excerpt = cleanExcerpt(post.excerpt.rendered);
    const date = post.date.split("T")[0]; // YYYY-MM-DD
    const category = mapCategory(post.categories);
    const readTime = estimateReadTime(post.content.rendered);

    // Récupérer les tags
    const tags = await fetchTags(post.tags);

    // Convertir le contenu HTML en Markdown
    let content = turndown.turndown(post.content.rendered);

    // Nettoyer le contenu
    content = content
      .replace(/\n{4,}/g, "\n\n\n") // Max 3 lignes vides
      .replace(/^\s+$/gm, "")       // Supprimer les lignes avec seulement des espaces
      .trim();

    // Construire le front matter
    const frontMatter = [
      "---",
      `title: "${title.replace(/"/g, '\\"')}"`,
      `excerpt: "${excerpt.replace(/"/g, '\\"')}"`,
      `date: "${date}"`,
      `category: "${category}"`,
      `tags: [${tags.map((t) => `"${t}"`).join(", ")}]`,
      `author: "Équipe Ekolink"`,
      `readTime: "${readTime}"`,
      "---",
    ].join("\n");

    const mdxContent = `${frontMatter}\n\n${content}\n`;

    fs.writeFileSync(outputPath, mdxContent, "utf-8");
    console.log(`  + ${slug} (${category}, ${readTime})`);
    created++;
  }

  console.log(`\nTerminé ! ${created} articles créés, ${skipped} ignorés.`);
}

migrate().catch(console.error);
