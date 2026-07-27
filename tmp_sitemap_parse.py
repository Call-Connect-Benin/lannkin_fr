import urllib.request
import re
import ssl
import sys

urls = [
    'https://lannkin.com/sitemap.xml',
]
seen = []

ctx = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
}

for url in urls:
    print('=== FETCH INDEX ===', url)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30, context=ctx) as resp:
            content = resp.read().decode('utf-8')
    except Exception as exc:
        print('ERROR FETCH', url, exc, file=sys.stderr)
        continue

    print('INDEX LENGTH', len(content))
    for loc in re.findall(r'<loc>(.*?)</loc>', content):
        print('INDEX LOC', loc)
        if '/sitemap' in loc and loc not in urls:
            urls.append(loc)

print('\n=== gathering pages ===')
for url in urls:
    if url.endswith('sitemap.xml') and url != 'https://lannkin.com/sitemap.xml':
        print('--- PAGE SITEMAP ===', url)
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30, context=ctx) as resp:
                content = resp.read().decode('utf-8')
        except Exception as exc:
            print('ERROR FETCH PAGE SITEMAP', url, exc, file=sys.stderr)
            continue
        print('PAGE LENGTH', len(content))
        for loc in re.findall(r'<loc>(.*?)</loc>', content):
            path = re.sub(r'^https?://[^/]+', '', loc).strip()
            if path and path not in seen:
                seen.append(path)
                print(path)

print('\n=== total', len(seen))
