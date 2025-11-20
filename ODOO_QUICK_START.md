# Odoo Integration - Quick Start Guide

This guide helps you quickly set up and test the Odoo integration for the HeizCenter website.

## Overview

The website integrates with Odoo for:
- ✅ **CRM Lead Management** - Contact forms, quotes, emergency requests
- ✅ **Newsletter Management** - Email subscriptions
- ⏸️ **Blog Management** (optional future feature)

## What's Already Implemented

All website-side code is **production-ready**:

- ✅ Complete Odoo API client ([odoo.ts](src/lib/api/odoo.ts))
- ✅ CRM service layer ([crm.ts](src/lib/api/crm.ts))
- ✅ All form integrations (contact, quote, emergency, newsletter)
- ✅ Error handling and logging
- ✅ Health check endpoint
- ✅ Test scripts

**What's needed:** Odoo backend configuration (see full plan in [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md))

---

## Quick Setup (5 Minutes)

### 1. Environment Variables

Copy the example file and fill in your Odoo credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
# Required - Your Odoo server URL
NEXT_PUBLIC_ODOO_URL=https://your-odoo-server.com

# Required - Odoo database name
ODOO_DATABASE=your_database_name

# Required - API user credentials
ODOO_USERNAME=api@heizcenter.de
ODOO_API_KEY=your_api_key_here

# Optional - Team/List IDs (will use defaults: 1, 2, 1)
ODOO_SALES_TEAM_ID=1
ODOO_EMERGENCY_TEAM_ID=2
ODOO_NEWSLETTER_LIST_ID=1
```

### 2. Test Connection

Install dependencies (if not already):

```bash
npm install
npm install -D tsx  # For running TypeScript scripts
```

Test the connection:

```bash
npx tsx scripts/test-odoo-connection.ts
```

Expected output:

```
===========================================
  Odoo Connection Test
===========================================

1️⃣  Checking environment variables...

   ✓ NEXT_PUBLIC_ODOO_URL: https://your-odoo-server.com
   ✓ ODOO_DATABASE: your_database
   ✓ ODOO_USERNAME: api@heizcenter.de
   ✓ ODOO_API_KEY: ***

2️⃣  Testing connection to Odoo...

   ✅ Connection successful!
   User ID: 2
   Successfully connected to Odoo. User ID: 2

===========================================
  All tests passed!
===========================================
```

### 3. Test Forms Locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 and test:

1. **Contact Form**: http://localhost:3000/kontakt
2. **Quote Request**: http://localhost:3000/angebot-anfragen
3. **Emergency Service**: http://localhost:3000/notdienst
4. **Newsletter** (on blog page): http://localhost:3000/blog

Check the browser console and terminal for detailed logs showing Odoo API calls.

### 4. Health Check

Test the health check endpoint:

```bash
curl http://localhost:3000/api/health/odoo
```

Or visit in browser: http://localhost:3000/api/health/odoo

---

## Odoo Backend Setup (Required)

The website code is ready, but you need to configure Odoo:

### Required in Odoo:

1. **Create custom fields** in `crm.lead` model:
   - `x_source` (Selection): contact_form, quote_request, emergency_service
   - `x_service_type` (Selection): waermepumpe, heizung, sanitaer, etc.
   - `x_property_type` (Selection): einfamilienhaus, mehrfamilienhaus, gewerbe
   - `x_emergency_type` (Selection): heizung-ausfall, rohrbruch, etc.
   - `x_heating_area` (Integer): Heating area in m²
   - `x_estimated_cost` (Float): Estimated cost in EUR

2. **Create sales teams**:
   - Standard team for quotes/contacts
   - Emergency team for 24/7 service

3. **Create mailing list**:
   - "HeizCenter Newsletter" for subscriptions

4. **Get IDs** and add to `.env.local`:
   ```bash
   ODOO_SALES_TEAM_ID=<your_team_id>
   ODOO_EMERGENCY_TEAM_ID=<your_emergency_team_id>
   ODOO_NEWSLETTER_LIST_ID=<your_list_id>
   ```

**Detailed instructions**: See [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md) sections:
- "Phase 1: Odoo Setup" (page 14)
- "Odoo Models & Data Mapping" (page 7)

---

## Testing the Integration

### Manual Form Testing

1. Fill out a contact form on the website
2. Check terminal logs for Odoo API calls:
   ```
   📬 Processing contact form submission for: test@example.com
   ✅ Odoo authentication successful. UID: 2
   Creating Odoo lead with data: {...}
   ✅ Odoo lead created successfully. ID: 123
   ✅ Contact form processed successfully. Lead ID: 123
   ```
3. Go to Odoo CRM → Leads
4. Find the new lead with source "contact_form"

### API Testing with cURL

**Test contact form:**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 8234 9665900",
    "subject": "Test Contact",
    "message": "This is a test message",
    "gdprConsent": true,
    "honeypot": ""
  }'
```

Expected response:

```json
{
  "success": true,
  "leadId": 123,
  "message": "Vielen Dank! Wir haben Ihre Anfrage erhalten..."
}
```

**Test newsletter:**

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "gdprConsent": true,
    "honeypot": ""
  }'
```

---

## Production Deployment

### Environment Variables in Vercel/Hosting

1. Go to your hosting dashboard (Vercel, etc.)
2. Add all environment variables from `.env.local`
3. **Important**: Use HTTPS URL for `NEXT_PUBLIC_ODOO_URL` in production

### Security Checklist

- ✅ Odoo accessible via HTTPS with valid SSL certificate
- ✅ Firewall configured (only allow website server IP if possible)
- ✅ API key set with appropriate permissions
- ✅ API key rotation scheduled (every 90 days)

### Monitoring

**Set up monitoring for:**

1. **Health endpoint**: https://heizcenter.de/api/health/odoo
   - Use UptimeRobot or similar
   - Alert if status changes to "unhealthy"

2. **Error logs**: Check for Odoo connection failures
   - Implement Sentry or similar for production

3. **Form submissions**: Monitor that leads appear in Odoo CRM

---

## Troubleshooting

### "Missing Odoo configuration"

**Cause**: Environment variables not set

**Solution**:
```bash
# Check if .env.local exists
ls -la .env.local

# Copy from example if missing
cp .env.example .env.local

# Fill in your Odoo credentials
nano .env.local
```

### "Failed to connect to Odoo"

**Possible causes:**

1. **Odoo server down**: Check server status
   ```bash
   curl https://your-odoo-server.com
   ```

2. **Wrong URL**: Verify `NEXT_PUBLIC_ODOO_URL`
   - Must include protocol: `https://` or `http://`
   - No trailing slash

3. **Firewall blocking**: Check if server IP is whitelisted in Odoo

4. **Network issue**: Test from server
   ```bash
   ssh your-server
   curl http://localhost:8069/web/database/list
   ```

### "Authentication failed"

**Possible causes:**

1. **Invalid credentials**: Double-check username and API key
2. **Wrong database name**: Verify `ODOO_DATABASE`
3. **User doesn't exist**: Check in Odoo: Settings → Users
4. **API key expired**: Generate new key in Odoo

**How to generate new API key** (Odoo 14+):
1. Go to user profile → Preferences
2. Account Security → New API Key
3. Copy key to `.env.local`

### "Lead created but missing fields"

**Cause**: Custom fields not created in Odoo

**Solution**: Follow "Phase 1: Odoo Setup" in [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md#phase-1-odoo-setup-backend)

---

## File Structure

```
src/
├── lib/api/
│   ├── odoo.ts          # Odoo API client (JSON-RPC)
│   └── crm.ts           # CRM service layer
├── app/api/
│   ├── contact/         # Contact form endpoint
│   ├── quote/           # Quote request endpoint
│   ├── emergency/       # Emergency service endpoint
│   ├── newsletter/      # Newsletter subscription endpoint
│   └── health/odoo/     # Health check endpoint
└── components/forms/
    ├── contact-form.tsx     # Contact form component
    ├── quote-form.tsx       # Quote form component
    └── emergency-form.tsx   # Emergency form component

scripts/
└── test-odoo-connection.ts  # Connection test script

ODOO_INTEGRATION_PLAN.md     # Comprehensive integration guide
ODOO_QUICK_START.md          # This file
```

---

## Next Steps

1. ✅ **Website code is ready** - all implemented
2. ⏸️ **Configure Odoo backend** - follow [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md)
3. ⏸️ **Test end-to-end** - submit forms and verify in Odoo
4. ⏸️ **Deploy to production** - set environment variables
5. ⏸️ **Set up monitoring** - health checks and error tracking

---

## Support & Resources

- **Full Integration Guide**: [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md)
- **Odoo Documentation**: https://www.odoo.com/documentation/
- **Odoo API Reference**: https://www.odoo.com/documentation/16.0/developer/reference/backend/orm.html

---

**Last Updated**: 2025-11-20
**Status**: Website code complete, ready for Odoo configuration
