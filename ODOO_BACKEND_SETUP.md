# Odoo Backend Configuration for HeizCenter Website Integration

**Recipient:** Odoo Administrator/Provider
**Project:** HeizCenter Website CRM Integration
**Date:** 2025-11-20

---

## Overview

The HeizCenter website needs to integrate with Odoo for:
- **CRM Lead Management** (contact forms, quote requests, emergency service)
- **Newsletter Management** (email subscriptions via mailing lists)

All website code is ready. We need you to configure the Odoo backend as described below.

**Estimated Time:** 2-4 hours

---

## Requirements

### Odoo Modules

Please ensure the following modules are installed:

1. ✅ **CRM** (`crm`) - Should already be installed
2. ✅ **Mass Mailing** (`mass_mailing`) - For newsletter management
3. ⏸️ **Website** (optional, for future blog sync)

---

## Step 1: Create Custom Fields in CRM

We need to add 6 custom fields to the `crm.lead` model to store website-specific data.

**How to create custom fields:**

**Option A: Via Odoo Studio** (if available)
1. Go to CRM app
2. Open any Lead/Opportunity
3. Click on Studio (wrench icon)
4. Add fields using drag-and-drop

**Option B: Via Technical Settings**
1. Activate Developer Mode: Settings → Activate Developer Mode
2. Go to Settings → Technical → Database Structure → Models
3. Search for model: `crm.lead`
4. Click on the model → Go to Fields tab
5. Click "Create" to add each field

---

### Custom Fields to Create:

#### Field 1: Lead Source
```
Field Name: x_source
Field Label: Lead Source (Website)
Field Type: Selection
Required: No

Selection Options:
- contact_form → Contact Form
- quote_request → Quote Request
- emergency_service → Emergency Service
- phone → Phone Call
- email → Direct Email
```

#### Field 2: Service Type
```
Field Name: x_service_type
Field Label: Service Type
Field Type: Selection
Required: No

Selection Options:
- waermepumpe → Wärmepumpe
- heizung → Heizung
- sanitaer → Sanitär & Bad
- klimaanlage → Klimaanlage
- solar → Solarthermie
- sonstiges → Sonstiges
```

#### Field 3: Property Type
```
Field Name: x_property_type
Field Label: Property Type
Field Type: Selection
Required: No

Selection Options:
- einfamilienhaus → Einfamilienhaus
- mehrfamilienhaus → Mehrfamilienhaus
- gewerbe → Gewerbe
```

#### Field 4: Emergency Type
```
Field Name: x_emergency_type
Field Label: Emergency Type
Field Type: Selection
Required: No

Selection Options:
- heizung-ausfall → Heizungsausfall
- rohrbruch → Rohrbruch / Wasserschaden
- gasgeruch → Gasgeruch
- warmwasser-ausfall → Warmwasserausfall
- sonstiges → Sonstiger Notfall
```

#### Field 5: Heating Area
```
Field Name: x_heating_area
Field Label: Heating Area (m²)
Field Type: Integer
Required: No
```

#### Field 6: Estimated Cost
```
Field Name: x_estimated_cost
Field Label: Estimated Cost (EUR)
Field Type: Float
Required: No
Digits: (16, 2)
```

---

## Step 2: Create Sales Teams

We need two sales teams to properly route leads from the website.

### Team 1: Standard Sales Team

**Path:** CRM → Configuration → Sales Teams → Create

```
Name: HeizCenter Vertrieb
Team Leader: [Assign appropriate user]
Team Members: [Add all sales representatives]

Use this team for:
- Contact form submissions
- Quote requests
```

**After creation, note the Team ID:**
- Click on the team
- Look at the URL: `/web#id=1&...`
- The number after `id=` is the Team ID (e.g., `1`)
- **Write down this ID** → We need it for `ODOO_SALES_TEAM_ID`

### Team 2: Emergency Team

**Path:** CRM → Configuration → Sales Teams → Create

```
Name: HeizCenter Notdienst 24/7
Team Leader: [Assign on-call manager]
Team Members: [Add emergency technicians]

Use this team for:
- Emergency service requests (24/7)
- Highest priority leads
```

**After creation, note the Team ID:**
- Same process as above
- **Write down this ID** → We need it for `ODOO_EMERGENCY_TEAM_ID`

---

## Step 3: Create Mailing List

We need a mailing list for newsletter subscriptions from the website.

**Path:** Mass Mailing → Mailing Lists → Create

```
Name: HeizCenter Newsletter
Is Public: No (we control subscriptions)
```

**After creation, note the List ID:**
- Click on the mailing list
- Look at the URL: `/web#id=1&...`
- The number after `id=` is the List ID (e.g., `1`)
- **Write down this ID** → We need it for `ODOO_NEWSLETTER_LIST_ID`

---

## Step 4: Create API User

We need a dedicated user for the website to connect to Odoo.

**Path:** Settings → Users & Companies → Users → Create

### User Configuration:

```
Name: Website API Integration
Login: api@heizcenter.de
Email: api@heizcenter.de

Access Rights:
├─ CRM: User - Own Documents Only
│  (or "Manager" if you want the website to see all leads)
├─ Mass Mailing: User
└─ Website: User (only if blog sync needed in future)

Additional Settings:
- Active: Yes
- Companies: [Select HeizCenter company]
```

### Generate API Key (Odoo 14+)

**Important:** Use API Key, not regular password for security.

1. Save the user
2. Go to user's profile (click on the user)
3. Click on "Preferences" tab
4. Scroll to "Account Security" section
5. Click "New API Key"
6. Enter description: `HeizCenter Website Integration`
7. Click "Generate"
8. **Copy the API Key immediately** (shown only once!)
9. **Write down the API Key** → We need it for `ODOO_API_KEY`

**For Odoo versions < 14:**
- Use a strong password instead
- Make sure to document it securely

---

## Step 5: Configure Automated Actions (Optional but Recommended)

Automated actions can send notifications when emergency requests arrive.

### Emergency Alert Automation

**Path:** Settings → Technical → Automation → Automated Actions → Create

```
Action Name: Emergency Service Alert
Model: Lead/Opportunity (crm.lead)
Trigger: On Create
Apply on (Domain):
  [('priority', '=', '3')]
  [('x_source', '=', 'emergency_service')]

Actions to Execute:
├─ Send Email
│  ├─ To: emergency_team@heizcenter.de
│  ├─ Subject: 🚨 NOTFALL - Neue Anfrage
│  └─ Body:
│      Neuer Notfall eingegangen!
│
│      Name: {{ object.contact_name }}
│      Telefon: {{ object.phone }}
│      Adresse: {{ object.street }}, {{ object.zip }}
│
│      Art: {{ object.x_emergency_type }}
│
│      Bitte umgehend zurückrufen!
│
└─ Create Activity (optional)
   ├─ Activity Type: Call
   ├─ Summary: NOTFALL - Sofort kontaktieren
   ├─ Assigned to: [On-call technician or team leader]
   └─ Due Date: Today
```

**Optional:** If you have SMS/WhatsApp integration in Odoo, add an SMS notification action here.

---

## Step 6: Network Configuration

The website needs to connect to your Odoo instance. Please provide one of the following:

### Option A: Public HTTPS URL (Recommended for Production)

**Required:**
- Valid SSL certificate
- Domain name (e.g., `odoo.heizcenter.de`)
- Firewall rules allowing HTTPS (port 443)

**Provide to website team:**
```
URL: https://odoo.heizcenter.de
```

**Security:** Optionally whitelist the website server IP address in your firewall.

### Option B: VPN Access

If Odoo is not publicly accessible, set up VPN access for the website server.

**Provide to website team:**
- VPN configuration file
- VPN credentials
- Internal Odoo URL (e.g., `http://10.0.0.10:8069`)

### Option C: Direct IP with Firewall Rule

For testing or if no domain is available:

**Provide to website team:**
```
URL: http://[your-odoo-server-ip]:8069
```

**Required:** Whitelist the website server IP in firewall rules:
```bash
# Example firewall rule
sudo ufw allow from [website-server-ip] to any port 8069
```

---

## Step 7: Verify Configuration

### Check CORS Settings (if applicable)

If the website and Odoo are on different domains, you may need to enable CORS.

**Option 1: Install odoo-cors module**
```bash
# Install from OCA
git clone https://github.com/OCA/web.git
# Enable cors addon in Odoo
```

**Option 2: Configure nginx reverse proxy**
```nginx
# Add to nginx config
add_header Access-Control-Allow-Origin "https://heizcenter.de" always;
add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
add_header Access-Control-Allow-Headers "Content-Type" always;
```

### Test JSON-RPC Endpoints

Verify that the API endpoints are accessible:

```bash
# Test database list endpoint
curl https://your-odoo-server.com/web/database/list

# Test authentication endpoint
curl -X POST https://your-odoo-server.com/web/session/authenticate \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "params": {
      "db": "your_database",
      "login": "api@heizcenter.de",
      "password": "your_api_key"
    }
  }'
```

You should receive JSON responses (not errors).

---

## Step 8: Provide Credentials to Website Team

Please provide the following information to the website development team:

```
ODOO SERVER CREDENTIALS
========================

Odoo URL: https://_______________
Database Name: _______________
API Username: api@heizcenter.de
API Key: _______________

Team IDs:
- Sales Team ID: _______________
- Emergency Team ID: _______________

Mailing List ID: _______________
```

**Security Note:** Send credentials via secure channel (encrypted email, password manager, etc.)

---

## Expected Data Flow

Once configured, here's what will happen:

### Contact Form Submission
1. User fills out contact form on website
2. Website sends data to Odoo via JSON-RPC
3. New Lead created in CRM with:
   - Name = Subject
   - Contact Name = User's name
   - Email, Phone
   - Description = Message
   - x_source = "contact_form"
   - Priority = Normal (1)
   - Team = Standard Sales Team

### Quote Request
1. User fills out detailed quote form (with property details)
2. Website creates Opportunity in CRM with:
   - Type = Opportunity (higher value)
   - All property details in description
   - Custom fields: x_service_type, x_property_type, x_heating_area, x_estimated_cost
   - Priority = High (2)
   - Team = Standard Sales Team

### Emergency Request
1. User reports emergency via website
2. Website creates Lead with:
   - Name = "🚨 NOTFALL: [Type]"
   - Priority = Very High (3)
   - Team = Emergency Team
   - x_source = "emergency_service"
   - x_emergency_type = Type of emergency
3. **Automated Action triggers** (if configured):
   - Email sent to emergency team
   - SMS notification (if configured)
   - Activity created for on-call technician

### Newsletter Subscription
1. User subscribes to newsletter
2. Website checks if email exists in Odoo
3. If new: Create contact in "HeizCenter Newsletter" mailing list
4. If exists: Add to mailing list (if not already subscribed)

---

## Testing Checklist

After configuration, please verify:

- [ ] All 6 custom fields created in crm.lead
- [ ] Both sales teams created (Standard + Emergency)
- [ ] Newsletter mailing list created
- [ ] API user created with correct permissions
- [ ] API key generated and saved
- [ ] Team IDs and List ID documented
- [ ] Odoo accessible via provided URL
- [ ] JSON-RPC endpoints responding (test with curl)
- [ ] Firewall rules configured (if applicable)
- [ ] CORS configured (if website on different domain)
- [ ] Automated action for emergencies configured (optional)

---

## Troubleshooting

### "Authentication failed"

**Check:**
- API user exists and is active
- API key is correct (regenerate if unsure)
- Database name is correct
- User has correct access rights

### "Cannot create lead"

**Check:**
- User has "Create" permission on crm.lead
- Custom fields exist and have correct technical names (x_source, etc.)
- Team IDs are correct

### "Cannot access Odoo from website"

**Check:**
- Odoo server is running
- Firewall allows connections from website server IP
- URL is correct and accessible
- SSL certificate is valid (if using HTTPS)

---

## Support Contacts

**For Odoo configuration questions:**
- Contact your Odoo account manager or support team

**For website integration questions:**
- Contact: jedAI Solutions (website development team)

---

## Appendix: Field Names Reference

For your reference, here are all the technical field names that will be used:

### Standard CRM Fields (already exist):
- `name` - Lead/Opportunity name
- `contact_name` - Contact person name
- `email_from` - Email address
- `phone` - Phone number
- `street` - Street address
- `zip` - Postal code
- `city` - City
- `description` - Lead description (multiline text)
- `type` - Lead type ('lead' or 'opportunity')
- `priority` - Priority (0=Low, 1=Normal, 2=High, 3=Very High)
- `team_id` - Assigned sales team (Many2one → crm.team)
- `user_id` - Assigned salesperson (Many2one → res.users)

### Custom Fields (to be created):
- `x_source` - Lead source from website
- `x_service_type` - Type of service requested
- `x_property_type` - Type of property (residential/commercial)
- `x_emergency_type` - Type of emergency (if applicable)
- `x_heating_area` - Heating area in square meters
- `x_estimated_cost` - Estimated cost from calculator

---

**Document Version:** 1.0
**Last Updated:** 2025-11-20
**Status:** Ready for Odoo configuration

**Questions?** Please contact the website development team with any questions or clarifications needed.
