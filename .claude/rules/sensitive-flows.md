---
description: Extra Review Gate für Auth, RLS, Secrets, PII und produktionsnahe Konfigurationen
paths:
  - "**/supabase/**"
  - "**/migrations/**"
  - "**/auth/**"
  - "**/rls*"
  - "**/policies/**"
  - "**/.env*"
  - "**/secrets/**"
  - "**/credentials/**"
  - "**/middleware.ts"
  - "**/middleware/**"
  - "**/*webhook*"
  - "**/*oauth*"
  - "**/ir.rule*"
  - "**/res_users*"
  - "**/access_rights*"
  - "**/.claude/projects/**/memory/**"
---

# Sensitive Flows — Extra Review Gate

Diese Regel lädt path-scoped (Frontmatter `paths:` oben — seit 2026-07-08 echt, vorher nur behauptet) bei Änderungen an Auth, RLS, Secrets, PII und produktionsnahen Konfigurationen.

## Pflicht-Checks vor jedem Commit in diesen Pfaden

### 1. Secrets & Keys

- **Keine** hardcoded Keys, Tokens, Passwörter — **immer** aus `.env` / Secret Store lesen
- **Niemals** einen rotierten Key in Logs / Docs / Memory dokumentieren (siehe Incident 2026-04-13, Vault `Knowledge/Lessons/2026-github-pat-leak-incident`)
- **Keine Secrets in Memory-Dateien** (`~/.claude/projects/**/memory/`) — Token-Prefix (4 Zeichen) + Fundort dokumentieren reicht
- **Keine Secrets in Permission-Rules** (`settings*.json` allow-Patterns) — Keys via `$ENV_VAR` referenzieren
- Gitleaks pre-commit muss laufen. Kein `--no-verify` bei Fund.

### 2. RLS Policies (Supabase)

- Jede neue/geänderte Policy **mindestens einmal** als anon, authenticated und service_role getestet
- **Default deny** beibehalten — neue Tabellen ohne RLS sind verboten (`supabase advisor check` muss sauber)
- Policy-Logik auf **Seiteneffekte** prüfen: join-Tabellen, Views, Functions mit `SECURITY DEFINER`
- Bei `SECURITY DEFINER`: explizit dokumentieren warum (im Kommentar **und** im Commit-Body)

### 3. Auth Flows

- `auth.users` NIEMALS direkt per SQL befüllen → Supabase Admin API nutzen (siehe [[Knowledge/Lessons/2026-supabase-auth-users-direct-insert|Lesson]])
- OAuth Redirects: Allowlist prüfen, keine Wildcards
- Session-Timeout-Änderungen immer mit User abstimmen
- Password-Reset-Flow: Rate-Limiting + Token-Expiry verifizieren

### 4. Webhooks / Public Endpoints

- Signatur-Validierung **immer** (Stripe-Signature, X-Hub-Signature, X-N8N-API-KEY)
- Idempotency Key Handling dokumentieren
- Bei unbekannter Quelle: 401 statt 500 (keine Error-Leakage)

### 5. PII / DSGVO

- Kontaktdaten aus `contact.ts` / `site.ts` importieren — **niemals** hardcoden (siehe `contact-safety.md`)
- PII in Logs grundsätzlich redacten
- Löschkonzept bei neuen User-Daten-Feldern mitdenken (DSGVO Art. 17)

### 6. Odoo Security

- Keine `ir.rule` Änderungen ohne dokumentierte Begründung
- `res.users` password column: Nur via `odoo shell` / Admin API, **nie** per SQL UPDATE (siehe [[Knowledge/Lessons/2026-odoo-sql-currval-und-passwort|Lesson]])
- API-Key Rotation: Alter Key invalidieren → neuer Key → n8n Credentials → **dann erst** Commit (neuer Key kommt **nicht** ins Repo)

## Review-Gate

Bei Änderungen in diesen Pfaden: **obligatorischer zweiter Durchgang**:

1. Implementation in Session A
2. Review in **separater Session B** durch `security-reviewer` Agent (frischer Kontext, keine Implementierungs-Verzerrung)
3. Changes nur committen wenn beide grün

Bei Production-Deploys zusätzlich: Changelog-Eintrag + Rollback-Plan.

## Red Flags — sofort stoppen

- Ein Tool schlägt vor `.env` / `secrets/*` zu committen → **STOP**
- RLS Policy mit `USING (true)` oder `WITH CHECK (true)` außer auf Read-Only-Public-Tabellen → **STOP**
- `GRANT ALL` oder Service-Role Keys im Client-Code → **STOP**
- Neuer SQL-INSERT in `auth.users` → **STOP** (Admin API nutzen)
- Commit-Message enthält "temporary", "will fix later", "hotfix" ohne Issue-Link → **STOP + User fragen**
