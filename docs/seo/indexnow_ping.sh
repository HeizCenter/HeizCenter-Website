#!/usr/bin/env bash
# IndexNow-Ping (Bing, Yandex u. a.) für geänderte URLs von heizcenter.de.
# Der Key liegt als public/<key>.txt im Repo und ist unter https://www.heizcenter.de/<key>.txt erreichbar.
#
# Aufruf aus dem Repo-Root:
#   docs/seo/indexnow_ping.sh https://www.heizcenter.de/blog/heizungsfoerderung-2027 [weitere URLs]
#   docs/seo/indexnow_ping.sh --sitemap      # alle URLs der Live-Sitemap
#
# Antwort 200/202 = angenommen. IndexNow verarbeitet asynchron; Erfolg zeigt sich in Bing Webmaster Tools.
set -euo pipefail

HOST="www.heizcenter.de"
KEY_FILE=$(ls public/*.txt | grep -E '/[0-9a-f]{32}\.txt$' | head -1)
[ -n "$KEY_FILE" ] || { echo "Kein IndexNow-Key in public/ gefunden" >&2; exit 1; }
KEY=$(basename "$KEY_FILE" .txt)

if [ "${1:-}" = "--sitemap" ]; then
  URLS=$(curl -s "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g')
else
  URLS="$*"
fi
[ -n "$URLS" ] || { echo "Keine URLs angegeben" >&2; exit 1; }

JSON=$(python3 -I -c 'import json,sys
urls=[u for u in sys.argv[3].split() if u]
print(json.dumps({"host": sys.argv[1], "key": sys.argv[2], "keyLocation": f"https://{sys.argv[1]}/{sys.argv[2]}.txt", "urlList": urls}))' "$HOST" "$KEY" "$URLS")

echo "$(echo "$URLS" | wc -w | tr -d ' ') URL(s) an IndexNow:"
curl -s -o /dev/null -w "IndexNow HTTP %{http_code}\n" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$JSON" https://api.indexnow.org/indexnow
