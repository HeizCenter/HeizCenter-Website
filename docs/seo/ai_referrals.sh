#!/usr/bin/env bash
# Besucher aus KI-Assistenten (Referrer) je Monat aus Vercel Web Analytics.
# Messgröße für HEC-178: „AI-Referrals <Monat>: n Besucher“.
# Seit 20.10.2026 zählt Vercel nur Besuche mit Einwilligung „Statistik“ (~50 %) – Zahlen sind Untergrenzen.
#
# Voraussetzung: Vercel-CLI eingeloggt (vercel login), Zugriff auf Team heizcenters-projects.
# Aufruf: docs/seo/ai_referrals.sh 2026-10      (Standard: laufender Monat)
set -euo pipefail

MONTH="${1:-$(date +%Y-%m)}"
AUTH="$HOME/Library/Application Support/com.vercel.cli/auth.json"
[ -f "$AUTH" ] || AUTH="$HOME/.local/share/com.vercel.cli/auth.json"
TOKEN=$(python3 -I -c "import json,sys; print(json.load(open(sys.argv[1]))['token'])" "$AUTH")
H="Authorization: Bearer $TOKEN"

TEAM=$(curl -s -H "$H" https://api.vercel.com/v2/teams | python3 -I -c "import sys,json; d=json.load(sys.stdin); print(next(t['id'] for t in d['teams'] if t['slug']=='heizcenters-projects'))")
PID=$(curl -s -H "$H" "https://api.vercel.com/v9/projects/heiz-center-website?teamId=$TEAM" | python3 -I -c "import sys,json; print(json.load(sys.stdin)['id'])")
SINCE="${MONTH}-01T00:00:00.000Z"
UNTIL=$(python3 -I -c "import sys,calendar; y,m=map(int,sys.argv[1].split('-')); print(f'{y}-{m:02d}-{calendar.monthrange(y,m)[1]}T23:59:59.000Z')" "$MONTH")

curl -s -H "$H" "https://api.vercel.com/v1/query/web-analytics/visits/aggregate?projectId=$PID&teamId=$TEAM&by=referrerHostname&since=$SINCE&until=$UNTIL&limit=100" \
  | python3 -I -c '
import sys, json
AI = {"chatgpt.com", "chat.openai.com", "perplexity.ai", "www.perplexity.ai", "copilot.microsoft.com",
      "claude.ai", "gemini.google.com", "duck.ai", "you.com", "chat.mistral.ai", "mistral.ai"}
d = json.load(sys.stdin)
rows = d.get("data", [])
total = 0
for r in rows:
    host = r.get("referrerHostname") or ""
    if host in AI:
        visitors = r["visitors"]
        print(f"{host:26s} {visitors:6d} Besucher")
        total += visitors
print(f"AI-Referrals {sys.argv[1]}: {total} Besucher")
' "$MONTH"
