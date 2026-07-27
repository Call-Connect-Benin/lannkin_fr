import re
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "next.config.ts"
SITEMAP = ROOT / "page-sitemap.xml"

if not CONFIG.exists():
    raise FileNotFoundError(f"Missing {CONFIG}")
if not SITEMAP.exists():
    raise FileNotFoundError(f"Missing {SITEMAP}")

text = CONFIG.read_text(encoding="utf-8")
pattern_texts = re.findall(r'source:\s*["\']([^"\']+)["\']', text)
pattern_texts = [p for p in pattern_texts if p]

if not pattern_texts:
    raise SystemExit("No redirect source patterns found in next.config.ts")


def route_pattern_to_regex(pattern: str) -> str:
    regex = ""
    i = 0
    while i < len(pattern):
        char = pattern[i]
        if char == ":":
            j = i + 1
            while j < len(pattern) and pattern[j].isalnum() or pattern[j] == "_":
                j += 1
            name = pattern[i + 1 : j]
            if j < len(pattern) and pattern[j] == "(":
                k = j + 1
                depth = 1
                while k < len(pattern) and depth:
                    if pattern[k] == "(":
                        depth += 1
                    elif pattern[k] == ")":
                        depth -= 1
                    k += 1
                inner = pattern[j + 1 : k - 1]
                regex += f"({inner})"
                i = k
            else:
                regex += "[^/]+"
                i = j
            continue

        if char == "(":
            k = i + 1
            depth = 1
            while k < len(pattern) and depth:
                if pattern[k] == "(":
                    depth += 1
                elif pattern[k] == ")":
                    depth -= 1
                k += 1
            inner = pattern[i + 1 : k - 1]
            regex += f"({inner})"
            i = k
            continue

        regex += re.escape(char)
        i += 1

    return regex

patterns = []
seen = set()
for p in pattern_texts:
    if p in seen:
        continue
    seen.add(p)

    regex = None
    if ":" in p or "(" in p:
        regex_text = route_pattern_to_regex(p)
        regex = re.compile(r"^" + regex_text + r"$")

    patterns.append((p, regex))

root_xml = ET.fromstring(SITEMAP.read_text(encoding="utf-8"))
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [loc.text.strip() for loc in root_xml.findall(".//s:loc", ns) if loc.text]
paths = []
for url in urls:
    path = re.sub(r"^https?://[^/]+", "", url).strip()
    if path and path not in paths:
        paths.append(path)

matches = []
missing = []
for path in paths:
    covered = False
    for source, regex in patterns:
        if source == path:
            covered = True
            break
        if regex is None:
            continue
        if regex.match(path):
            covered = True
            break
    if covered:
        matches.append(path)
    else:
        missing.append(path)

print(f"Patterns loaded: {len(patterns)}")
print(f"Paths in page-sitemap.xml: {len(paths)}")
print(f"Covered paths: {len(matches)}")
print(f"Missing paths: {len(missing)}")
print()
for path in missing[:200]:
    print(path)

if missing:
    print("\nAdd missing redirects for the above old URLs or add a broader catchall if safe.")
