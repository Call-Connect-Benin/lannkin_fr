# Plan SEO — Corrections prioritaires pour lannkin.ca

## Contexte

L'audit Google Search Console a révélé plusieurs problèmes SEO critiques sur `lannkin.ca` :

1. **5 URLs WordPress en 404** sur le serveur de production (les redirections existent dans [next.config.ts](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/next.config.ts) mais ne semblent pas actives sur prod)
2. **URLs japonaises frauduleuses** indexées par Google (spam SEO de l'ère WordPress)
3. **`/categorie/analyse_optimisation/`** avec underscore — non couverte par les patterns de redirection actuels
4. **Sitemap soumis** mais certaines URLs ne correspondent pas encore aux pages Next.js

## Corrections proposées

### 1. [next.config.ts](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/next.config.ts) — Renforcer les redirections

#### [MODIFY] [next.config.ts](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/next.config.ts)

Ajouter un pattern générique pour les slugs avec **underscores** dans `/categorie/` et `/tag/`, et compléter les URLs manquantes identifiées :
- `/categorie/analyse_optimisation/` → `/blog/`
- `/categorie/:slug*/` (avec underscore) → `/blog/` via un pattern [(.*)](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/next.config.ts#240-261)

Ajouter aussi les URL japonaises confirmées en 404 si elles ne sont pas déjà couvertes.

---

### 2. [public/robots.txt](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/public/robots.txt) — Bloquer les URLs frauduleuses

#### [MODIFY] [robots.txt](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/public/robots.txt)

Ajouter des directives `Disallow` pour les patterns d'URLs japonaises/spam identifiées dans GSC afin que Google cesse de les crawler.

---

### 3. Pas de changements côté sitemap (déjà OK)

Le sitemap ([sitemap-0.xml](file:///c:/xampp/htdocs/site-web-next-lannkin.ca-main/public/sitemap-0.xml)) contient 297 URLs valides du site Next.js. Aucun changement nécessaire.

---

## Plan de vérification

### Tests automatisés

Il n'y a pas de suite de tests existants dans le projet. La vérification se fera manuellement sur le serveur local XAMPP.

### Vérification manuelle (étapes précises)

1. **Démarrer le serveur local** :
   ```
   cd c:\xampp\htdocs\site-web-next-lannkin.ca-main
   npm run dev
   ```

2. **Tester les 5 redirections critiques** en ouvrant chaque URL dans le navigateur (doit redirectionner vers la cible, PAS afficher 404) :
   - `http://localhost:3000/pourquoi-une-compagnie-doit-avoir-un-site-web/` → doit aller vers `/blog/conception-web/`
   - `http://localhost:3000/pack-smart-business/` → doit aller vers `/tarifs/`
   - `http://localhost:3000/demande-de-soumission/` → doit aller vers `/devis-gratuit/`
   - `http://localhost:3000/new-home-page/` → doit aller vers `/`
   - `http://localhost:3000/categorie/analyse_optimisation/` → doit aller vers `/blog/`

3. **Vérifier que les redirections retournent HTTP 308** (redirect permanent) :
   ```powershell
   Invoke-WebRequest -Uri "http://localhost:3000/pack-smart-business/" -MaximumRedirection 0 -ErrorAction SilentlyContinue | Select-Object StatusCode
   ```
   Résultat attendu : `StatusCode: 308`

> [!IMPORTANT]
> Après validation locale, le code doit être **déployé sur le serveur de production** pour que les corrections soient actives sur `lannkin.ca`. Les changements locaux n'affectent pas le site live.
