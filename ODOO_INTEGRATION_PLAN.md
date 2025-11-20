# Odoo Integration Plan - HeizCenter Website

**Version:** 1.0
**Date:** 2025-11-20
**Target:** Self-hosted Odoo Instance (Local Network)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Website Aspects Requiring Odoo Integration](#website-aspects-requiring-odoo-integration)
3. [Current Technical Implementation Assessment](#current-technical-implementation-assessment)
4. [Odoo Models & Data Mapping](#odoo-models--data-mapping)
5. [Self-Hosted Odoo Integration Guide](#self-hosted-odoo-integration-guide)
6. [Implementation Steps](#implementation-steps)
7. [Code Examples](#code-examples)
8. [Testing Strategy](#testing-strategy)
9. [Security Considerations](#security-considerations)
10. [Error Handling & Monitoring](#error-handling--monitoring)

---

## Executive Summary

This document provides a comprehensive integration plan for connecting the HeizCenter Next.js website to a **self-hosted Odoo instance**. The integration enables:

- **CRM Lead Management**: Contact forms, quote requests, and emergency service requests
- **Newsletter Management**: Email subscription handling via Odoo Mailing Lists
- **Optional Blog Management**: Blog content synchronization from Odoo (future consideration)

**Current Status:**
- ✅ Infrastructure is properly set up (API routes, validation schemas, forms)
- ⚠️ **All CRM functions are stubs** - need implementation
- ✅ Environment variable structure is correct
- ⚠️ **No actual Odoo communication** - needs XML-RPC implementation

---

## Website Aspects Requiring Odoo Integration

### 1. **Contact Form** → Odoo CRM Lead (Priority: HIGH)
**Location:** `/kontakt` page
**Component:** `src/components/forms/contact-form.tsx`
**API Route:** `src/app/api/contact/route.ts`
**CRM Function:** `submitContactForm()` in `src/lib/api/crm.ts`

**Form Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject (required)
- Message (required)
- GDPR Consent (required)
- Honeypot (anti-spam)

**Odoo Destination:**
- **Model:** `crm.lead`
- **Type:** Standard lead/opportunity
- **Priority:** Normal
- **Source:** Website Contact Form

---

### 2. **Quote Request Form** → Odoo CRM Lead (Priority: HIGH)
**Location:** `/angebot-anfragen` page
**Component:** `src/components/forms/quote-form.tsx`
**API Route:** `src/app/api/quote/route.ts`
**CRM Function:** `submitQuoteRequest()` in `src/lib/api/crm.ts`

**Form Fields (extensive):**
- Personal: Name, Email, Phone, Address, Postal Code, City
- Service Type: Wärmepumpe, Heizung, Sanitär, Klimaanlage, Solar, Sonstiges
- Property Details: Type, Construction Year, Heating Area
- Heat Pump Specifics (if applicable): Pump Type, Heating Surface, Current Heating, Insulation, Building Year, Residents, Estimated Cost
- Message, Preferred Contact Time
- GDPR Consent, Honeypot

**Special Features:**
- **Heat Pump Calculator Integration**: Pre-fills form from URL parameters
- **Detailed Project Information**: More fields than standard contact form

**Odoo Destination:**
- **Model:** `crm.lead`
- **Type:** Opportunity (higher value)
- **Priority:** High
- **Source:** Website Quote Request
- **Custom Fields Required:** Service type, property details, estimated cost

---

### 3. **Emergency Service Form** → Odoo CRM Lead (Priority: CRITICAL)
**Location:** `/notdienst` page
**Component:** `src/components/forms/emergency-form.tsx`
**API Route:** `src/app/api/emergency/route.ts`
**CRM Function:** `submitEmergencyRequest()` in `src/lib/api/crm.ts`

**Form Fields:**
- Name (required)
- Phone (required) - for immediate callback
- Address (required)
- Postal Code (required)
- Emergency Type: Heizungsausfall, Rohrbruch, Gasgeruch, Warmwasserausfall, Sonstiges
- Description (required)
- GDPR Consent

**Odoo Destination:**
- **Model:** `crm.lead`
- **Type:** Urgent service request
- **Priority:** Very High (or create automated task assignment)
- **Source:** Website Emergency Service
- **SLA:** Immediate response required

**Critical Requirement:**
- **Immediate notification** to on-call team
- Consider SMS/WhatsApp integration via Odoo
- 24/7 availability check

---

### 4. **Newsletter Subscription** → Odoo Mailing List (Priority: MEDIUM)
**Location:** Multiple pages (footer, blog page)
**API Route:** `src/app/api/newsletter/route.ts`
**CRM Function:** `subscribeNewsletter()` in `src/lib/api/crm.ts`

**Form Fields:**
- Email (required)
- GDPR Consent (required)
- Honeypot

**Odoo Destination:**
- **Model:** `mailing.contact`
- **Mailing List:** "HeizCenter Newsletter" (to be created in Odoo)
- **Opt-in Type:** Confirmed (double opt-in recommended for GDPR)

---

### 5. **Blog Content Management** (Optional - Future)
**Status:** Currently using mock data in `src/lib/api/blog.ts`
**Consideration:** Sync blog posts from Odoo Website/Blog module

**Benefit:** Content team can manage blog in Odoo CMS
**Complexity:** Medium - requires caching strategy for performance
**Recommendation:** Implement after CRM integration is stable

---

## Current Technical Implementation Assessment

### ✅ **What's Properly Implemented**

#### 1. **Validation Layer** (`src/lib/validations/contact.ts`)
- ✅ Zod schemas for all form types
- ✅ Proper TypeScript types exported
- ✅ GDPR consent validation
- ✅ Honeypot anti-spam fields
- ✅ German error messages

#### 2. **API Routes Architecture**
- ✅ `/api/contact` - Contact form endpoint
- ✅ `/api/quote` - Quote request endpoint
- ✅ `/api/emergency` - Emergency service endpoint
- ✅ `/api/newsletter` - Newsletter signup endpoint
- ✅ Proper error handling structure
- ✅ Zod validation in routes
- ✅ Honeypot spam detection

#### 3. **Form Components**
- ✅ React Hook Form implementation
- ✅ Controlled components with validation
- ✅ Loading states and error messages
- ✅ User-friendly German UI
- ✅ Accessibility features

#### 4. **Environment Configuration**
- ✅ `.env.example` with Odoo variables template
- ✅ Variable naming convention correct:
  - `NEXT_PUBLIC_ODOO_URL` - for client-side
  - `ODOO_DATABASE` - server-side only
  - `ODOO_USERNAME` - server-side only
  - `ODOO_API_KEY` - server-side only

#### 5. **Odoo Client Scaffold** (`src/lib/api/odoo.ts`)
- ✅ OdooClient class structure
- ✅ Authentication method (`testConnection`)
- ✅ JSON-RPC request setup
- ⚠️ Methods exist but not fully implemented

---

### ⚠️ **What Needs Implementation**

#### 1. **CRM Service Layer** (`src/lib/api/crm.ts`)
**Status:** All functions are stubs with `console.log` and mock responses

❌ `submitContactForm()` - Returns mock leadId
❌ `submitQuoteRequest()` - Returns mock leadId
❌ `submitEmergencyRequest()` - Returns mock leadId
❌ `subscribeNewsletter()` - Returns mock success
❌ `sendConfirmationEmail()` - Not implemented

**Action Required:**
- Replace all functions with actual Odoo XML-RPC calls
- Use `OdooClient` from `odoo.ts` for API communication
- Implement proper error handling
- Add retry logic for failed requests

#### 2. **Odoo Client Methods** (`src/lib/api/odoo.ts`)
**Status:** Basic structure exists, needs XML-RPC implementation

❌ `createLead()` - Stub function
❌ `getBlogPosts()` - Stub function
⚠️ `testConnection()` - Has JSON-RPC but needs testing

**Action Required:**
- Implement `createLead()` with proper XML-RPC call to `crm.lead`
- Add `createMailingContact()` for newsletter subscriptions
- Add proper authentication flow
- Implement session management
- Add connection pooling for performance

#### 3. **Odoo Model Configuration**
**Status:** Needs to be configured in Odoo backend

Required Odoo Modules:
- ❌ CRM module (standard)
- ❌ Mass Mailing module (for newsletter)
- ❌ Custom fields in `crm.lead` for website-specific data

Custom Fields Needed in `crm.lead`:
- `x_service_type` (Selection): waermepumpe, heizung, sanitaer, klimaanlage, solar
- `x_property_type` (Selection): einfamilienhaus, mehrfamilienhaus, gewerbe
- `x_emergency_type` (Selection): heizung-ausfall, rohrbruch, etc.
- `x_postal_code` (Char)
- `x_heating_area` (Integer)
- `x_estimated_cost` (Float)
- `x_source` (Selection): contact_form, quote_request, emergency_service

---

## Odoo Models & Data Mapping

### **crm.lead** - CRM Lead/Opportunity

#### Contact Form → crm.lead Mapping

```python
# Odoo Model: crm.lead
{
    'name': subject,                    # Form: subject
    'contact_name': name,               # Form: name
    'email_from': email,                # Form: email
    'phone': phone,                     # Form: phone (optional)
    'description': message,             # Form: message
    'type': 'lead',                     # Fixed value
    'x_source': 'contact_form',         # Custom field
    'priority': '1',                    # Normal (0=Low, 1=Normal, 2=High, 3=Very High)
    'team_id': <sales_team_id>,         # Configure in Odoo
    'user_id': False,                   # Unassigned initially
    'stage_id': <new_stage_id>,         # "New" stage
}
```

#### Quote Request → crm.lead Mapping

```python
# Odoo Model: crm.lead
{
    'name': f"Angebotsanfrage {service_type}",
    'contact_name': name,
    'email_from': email,
    'phone': phone,
    'street': address,
    'zip': postal_code,
    'city': city,
    'description': message or f"Angebotsanfrage für {service_type}",
    'type': 'opportunity',             # Higher value than lead
    'x_source': 'quote_request',
    'x_service_type': service_type,    # Custom field
    'x_property_type': property_type,  # Custom field
    'x_heating_area': heating_area,    # Custom field (integer)
    'x_estimated_cost': estimated_cost, # Custom field (float)
    'priority': '2',                   # High priority
    'team_id': <sales_team_id>,
    'user_id': False,
    'stage_id': <new_opportunity_stage_id>,
}
```

#### Emergency Request → crm.lead Mapping

```python
# Odoo Model: crm.lead
{
    'name': f"NOTFALL: {emergency_type}",
    'contact_name': name,
    'phone': phone,                    # Critical field
    'street': address,
    'zip': postal_code,
    'description': description,
    'type': 'lead',
    'x_source': 'emergency_service',
    'x_emergency_type': emergency_type, # Custom field
    'priority': '3',                    # Very High (triggers alerts)
    'team_id': <emergency_team_id>,     # Dedicated emergency team
    'user_id': <on_call_user_id>,       # Assign to on-call technician
    'stage_id': <emergency_stage_id>,   # "Emergency" stage
}
```

### **mailing.contact** - Newsletter Subscription

```python
# Odoo Model: mailing.contact
{
    'email': email,
    'list_ids': [(4, <newsletter_mailing_list_id>)],  # Link to mailing list
    'opt_out': False,
    'subscription_list_ids': [(0, 0, {
        'list_id': <newsletter_mailing_list_id>,
        'opt_out': False,
    })],
}
```

---

## Self-Hosted Odoo Integration Guide

### Network Configuration Requirements

#### 1. **Odoo Server Setup**

**Assumption:** Odoo is hosted on local network (e.g., `192.168.1.100:8069`)

**Required Odoo Configuration** (`/etc/odoo/odoo.conf`):

```ini
[options]
# Enable XML-RPC
xmlrpc = True
xmlrpc_interface = 0.0.0.0
xmlrpc_port = 8069

# Security
proxy_mode = True
list_db = False

# CORS (if website and Odoo on different domains/ports)
# Install odoo-cors addon or configure nginx reverse proxy
```

#### 2. **Network Access Options**

**Option A: Direct Local Network Access** (Recommended for Development)
- Website server and Odoo on same network
- Use internal IP: `http://192.168.1.100:8069`
- **Pros:** Simple, fast, no external dependencies
- **Cons:** Only works when on same network

**Option B: VPN Tunnel** (Recommended for Production)
- Setup VPN between website hosting and Odoo server
- Use VPN IP for Odoo URL
- **Pros:** Secure, works remotely
- **Cons:** Requires VPN setup and maintenance

**Option C: Reverse Proxy with SSL** (Best for Production)
- Setup nginx/Apache reverse proxy on Odoo server
- Expose Odoo via HTTPS with SSL certificate
- Use domain: `https://odoo.heizcenter.de`
- **Pros:** Secure, professional, works anywhere
- **Cons:** Requires SSL certificate and domain configuration

**Recommended Production Setup:**

```nginx
# /etc/nginx/sites-available/odoo.heizcenter.de
upstream odoo {
    server 127.0.0.1:8069;
}

server {
    listen 443 ssl http2;
    server_name odoo.heizcenter.de;

    ssl_certificate /etc/letsencrypt/live/odoo.heizcenter.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/odoo.heizcenter.de/privkey.pem;

    location / {
        proxy_pass http://odoo;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # XML-RPC endpoint
    location ~* /web/(dataset|login|session|database|webclient) {
        proxy_pass http://odoo;
        proxy_redirect off;
        proxy_set_header Host $host;
    }
}
```

#### 3. **Firewall Configuration**

If using direct access or reverse proxy:

```bash
# Allow Odoo port (only from website server IP if possible)
sudo ufw allow from <website_server_ip> to any port 8069
# OR for reverse proxy:
sudo ufw allow 443/tcp
```

---

### Authentication & API Access

#### 1. **Create Odoo API User**

Best practice: Create dedicated API user in Odoo

**Steps in Odoo UI:**
1. Go to Settings → Users & Companies → Users
2. Click "Create"
3. Fill in:
   - Name: "Website API Integration"
   - Login: `api@heizcenter.de`
   - **Generate strong API key** (not regular password)
4. Assign Access Rights:
   - CRM: User (Own Documents Only) OR Manager (if needs all leads)
   - Mass Mailing: User
   - Website: User (if blog sync needed)
5. Save user

#### 2. **Generate API Key** (Odoo 14+)

**In Odoo:**
1. Go to user profile → Preferences → Account Security
2. Click "New API Key"
3. Enter description: "HeizCenter Website Integration"
4. Copy generated key (shown only once!)
5. Store in `.env.local` as `ODOO_API_KEY`

**For older Odoo versions:**
- Use regular password in `ODOO_API_KEY`
- Consider password rotation policy

#### 3. **Environment Variables Configuration**

**Create `/Users/Q285389/Desktop/jedAI/ClaudeCode/HeizCenter-Website/.env.local`:**

```bash
# Odoo API Configuration (Self-Hosted)
NEXT_PUBLIC_ODOO_URL=https://odoo.heizcenter.de
# OR for local development:
# NEXT_PUBLIC_ODOO_URL=http://192.168.1.100:8069

ODOO_DATABASE=heizcenter_production
ODOO_USERNAME=api@heizcenter.de
ODOO_API_KEY=your_generated_api_key_here

# Optional: Odoo configuration IDs (get from Odoo after setup)
ODOO_SALES_TEAM_ID=1
ODOO_EMERGENCY_TEAM_ID=2
ODOO_NEWSLETTER_LIST_ID=1
```

**Security Note:**
- ❌ NEVER commit `.env.local` to git (already in `.gitignore`)
- ✅ Use environment variables in production (Vercel/hosting dashboard)
- ✅ Rotate API keys every 90 days

---

### CORS Configuration (if needed)

If website and Odoo are on different domains, configure CORS in Odoo:

**Option 1: Install `odoo-cors` module**

```bash
# In Odoo addons directory
git clone https://github.com/OCA/web.git
# Enable cors addon
# Add to odoo.conf:
# addons_path = /path/to/addons,/path/to/web
```

**Option 2: Configure in nginx reverse proxy**

```nginx
# In nginx odoo config
add_header Access-Control-Allow-Origin "https://heizcenter.de" always;
add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
add_header Access-Control-Allow-Headers "Content-Type, X-Requested-With" always;
```

---

## Implementation Steps

### Phase 1: Odoo Setup (Backend)

#### Step 1.1: Install Required Odoo Modules

**In Odoo UI:**
1. Go to Apps
2. Search and Install:
   - ✅ CRM (should be pre-installed)
   - ✅ Mass Mailing
   - ✅ Website (optional, for blog sync)

#### Step 1.2: Create Custom Fields in CRM

**In Odoo:**
1. Go to Settings → Technical → Database Structure → Models
2. Search for `crm.lead`
3. Click on model → Add fields:

```python
# Field: x_source
Field Name: x_source
Field Label: Lead Source
Field Type: Selection
Selection Options:
    - contact_form: Contact Form
    - quote_request: Quote Request
    - emergency_service: Emergency Service
    - phone: Phone Call
    - email: Direct Email

# Field: x_service_type
Field Name: x_service_type
Field Label: Service Type
Field Type: Selection
Selection Options:
    - waermepumpe: Wärmepumpe
    - heizung: Heizung
    - sanitaer: Sanitär & Bad
    - klimaanlage: Klimaanlage
    - solar: Solarthermie
    - sonstiges: Sonstiges

# Field: x_property_type
Field Name: x_property_type
Field Label: Property Type
Field Type: Selection
Selection Options:
    - einfamilienhaus: Einfamilienhaus
    - mehrfamilienhaus: Mehrfamilienhaus
    - gewerbe: Gewerbe

# Field: x_emergency_type
Field Name: x_emergency_type
Field Label: Emergency Type
Field Type: Selection
Selection Options:
    - heizung-ausfall: Heizungsausfall
    - rohrbruch: Rohrbruch / Wasserschaden
    - gasgeruch: Gasgeruch
    - warmwasser-ausfall: Warmwasserausfall
    - sonstiges: Sonstiger Notfall

# Field: x_heating_area
Field Name: x_heating_area
Field Label: Heating Area (m²)
Field Type: Integer

# Field: x_estimated_cost
Field Name: x_estimated_cost
Field Label: Estimated Cost (EUR)
Field Type: Float
```

**Alternative: Use Odoo Studio** (if available)
- Studio → CRM → Add Fields → Drag and drop

#### Step 1.3: Create Sales Teams

**CRM → Configuration → Sales Teams:**

1. **Standard Sales Team**
   - Name: HeizCenter Vertrieb
   - Team Members: Add sales reps
   - Use for: Contact forms, Quote requests

2. **Emergency Team**
   - Name: HeizCenter Notdienst 24/7
   - Team Members: On-call technicians
   - Use for: Emergency service requests

#### Step 1.4: Create Mailing List

**Mass Mailing → Mailing Lists:**
1. Click "Create"
2. Name: HeizCenter Newsletter
3. Save
4. Note the ID (visible in URL: `/web#id=1&...`) → use in `ODOO_NEWSLETTER_LIST_ID`

#### Step 1.5: Configure Automated Actions (Optional)

**For Emergency Requests:**

Settings → Technical → Automation → Automated Actions:

```yaml
Model: Lead/Opportunity (crm.lead)
Trigger: On Create
Apply on:
  - Priority = Very High
  - x_source = emergency_service
Action:
  - Send Email to: emergency_team@heizcenter.de
  - Send SMS to: on-call technician (if SMS configured)
  - Create Activity: "NOTFALL - Sofort kontaktieren"
```

---

### Phase 2: Website Code Implementation

#### Step 2.1: Update Odoo Client (`src/lib/api/odoo.ts`)

**See [Code Examples](#code-examples) section below for complete implementation**

Key changes:
- ✅ Implement `authenticate()` method with XML-RPC
- ✅ Implement `execute_kw()` for model operations
- ✅ Implement `createLead()` method
- ✅ Implement `createMailingContact()` method
- ✅ Add error handling and retries

#### Step 2.2: Update CRM Service (`src/lib/api/crm.ts`)

**Replace stub functions with Odoo calls:**

```typescript
import { odooClient } from './odoo';

export async function submitContactForm(data: {...}) {
  const leadData = {
    name: data.subject,
    contact_name: data.name,
    email_from: data.email,
    phone: data.phone || false,
    description: data.message,
    type: 'lead',
    x_source: 'contact_form',
    priority: '1',
  };

  return await odooClient.createLead(leadData);
}

// Similar for submitQuoteRequest, submitEmergencyRequest, subscribeNewsletter
```

#### Step 2.3: Test Connection Script

**Create `scripts/test-odoo-connection.ts`:**

```typescript
import { odooClient } from '../src/lib/api/odoo';

async function testConnection() {
  console.log('Testing Odoo connection...');
  const result = await odooClient.testConnection();
  console.log(result);
}

testConnection();
```

Run: `npx tsx scripts/test-odoo-connection.ts`

#### Step 2.4: Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in Odoo credentials
3. Update `.env.local` with team/list IDs from Odoo
4. Restart Next.js dev server: `npm run dev`

---

### Phase 3: Testing & Validation

#### Step 3.1: Unit Tests

**Test each form submission:**
1. Contact Form → Check lead created in Odoo CRM
2. Quote Request → Verify opportunity with all fields
3. Emergency Request → Confirm high priority + team assignment
4. Newsletter → Check mailing list contact added

#### Step 3.2: Error Scenarios

Test failure cases:
- ❌ Odoo server unreachable
- ❌ Invalid credentials
- ❌ Missing required fields
- ❌ Duplicate email (newsletter)
- ❌ Network timeout

Verify error messages shown to user are friendly.

#### Step 3.3: Load Testing

**If expecting high traffic:**
- Test connection pooling
- Monitor Odoo server resources
- Check response times (<2s for form submission)

---

### Phase 4: Deployment

#### Step 4.1: Production Environment Variables

**In Vercel/hosting dashboard:**
1. Add environment variables:
   - `NEXT_PUBLIC_ODOO_URL`
   - `ODOO_DATABASE`
   - `ODOO_USERNAME`
   - `ODOO_API_KEY`
   - `ODOO_SALES_TEAM_ID`
   - `ODOO_EMERGENCY_TEAM_ID`
   - `ODOO_NEWSLETTER_LIST_ID`

#### Step 4.2: SSL/HTTPS Verification

- ✅ Ensure Odoo is accessible via HTTPS
- ✅ Valid SSL certificate
- ✅ CORS configured correctly

#### Step 4.3: Monitoring Setup

**Implement:**
- Error logging (Sentry, LogRocket)
- Odoo connection health checks
- Alert on failed form submissions

---

## Code Examples

### Updated `src/lib/api/odoo.ts`

```typescript
interface OdooConfig {
  url: string;
  db: string;
  username: string;
  apiKey: string;
}

class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;

  constructor(config: OdooConfig) {
    this.config = config;
  }

  /**
   * Authenticate with Odoo and get user ID
   */
  private async authenticate(): Promise<number> {
    if (this.uid !== null) {
      return this.uid; // Return cached UID
    }

    const authUrl = `${this.config.url}/web/session/authenticate`;

    try {
      const response = await fetch(authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          params: {
            db: this.config.db,
            login: this.config.username,
            password: this.config.apiKey,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Odoo authentication failed: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo error: ${data.error.data.message}`);
      }

      if (!data.result || !data.result.uid) {
        throw new Error('Authentication failed: No UID returned');
      }

      this.uid = data.result.uid;
      return this.uid;
    } catch (error) {
      console.error('Odoo authentication error:', error);
      throw new Error('Failed to connect to Odoo. Please try again later.');
    }
  }

  /**
   * Execute Odoo model method via XML-RPC
   */
  private async executeKw(
    model: string,
    method: string,
    args: any[] = [],
    kwargs: Record<string, any> = {}
  ): Promise<any> {
    const uid = await this.authenticate();
    const executeUrl = `${this.config.url}/web/dataset/call_kw`;

    try {
      const response = await fetch(executeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'call',
          params: {
            model: model,
            method: method,
            args: args,
            kwargs: {
              ...kwargs,
              context: {
                lang: 'de_DE',
                tz: 'Europe/Berlin',
              },
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Odoo request failed: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error('Odoo execution error:', data.error);
        throw new Error(data.error.data?.message || 'Odoo execution failed');
      }

      return data.result;
    } catch (error) {
      console.error(`Odoo ${model}.${method} error:`, error);
      throw error;
    }
  }

  /**
   * Test connection to Odoo
   */
  async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      const uid = await this.authenticate();
      return {
        success: true,
        message: `Successfully connected to Odoo. User ID: ${uid}`,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Create a CRM lead in Odoo
   */
  async createLead(leadData: {
    name: string;
    contact_name: string;
    email_from?: string;
    phone?: string | false;
    street?: string;
    zip?: string;
    city?: string;
    description?: string;
    type?: 'lead' | 'opportunity';
    priority?: '0' | '1' | '2' | '3';
    x_source?: string;
    x_service_type?: string;
    x_property_type?: string;
    x_emergency_type?: string;
    x_heating_area?: number;
    x_estimated_cost?: number;
    team_id?: number;
    user_id?: number | false;
  }): Promise<{ success: boolean; leadId?: number; error?: string }> {
    try {
      // Set default values
      const data = {
        type: 'lead',
        priority: '1',
        user_id: false,
        team_id: parseInt(process.env.ODOO_SALES_TEAM_ID || '1'),
        ...leadData,
      };

      // Override team for emergency requests
      if (leadData.x_source === 'emergency_service') {
        data.team_id = parseInt(process.env.ODOO_EMERGENCY_TEAM_ID || data.team_id.toString());
        data.priority = '3'; // Very High
      }

      const leadId = await this.executeKw('crm.lead', 'create', [[data]]);

      return {
        success: true,
        leadId: leadId,
      };
    } catch (error) {
      console.error('Create lead error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create lead',
      };
    }
  }

  /**
   * Subscribe email to mailing list
   */
  async createMailingContact(email: string): Promise<{
    success: boolean;
    contactId?: number;
    error?: string;
  }> {
    try {
      const listId = parseInt(process.env.ODOO_NEWSLETTER_LIST_ID || '1');

      // Check if contact already exists
      const existingContacts = await this.executeKw(
        'mailing.contact',
        'search_read',
        [[['email', '=', email]]],
        { fields: ['id', 'subscription_list_ids'] }
      );

      if (existingContacts && existingContacts.length > 0) {
        const contact = existingContacts[0];

        // Check if already subscribed to this list
        const subscribed = contact.subscription_list_ids?.includes(listId);

        if (subscribed) {
          return {
            success: true,
            contactId: contact.id,
            error: 'already_subscribed',
          };
        }

        // Add to mailing list
        await this.executeKw('mailing.contact', 'write', [
          [contact.id],
          {
            list_ids: [[4, listId]], // Link to list (4 = add link)
          },
        ]);

        return {
          success: true,
          contactId: contact.id,
        };
      }

      // Create new contact
      const contactId = await this.executeKw('mailing.contact', 'create', [
        [
          {
            email: email,
            list_ids: [[4, listId]],
          },
        ],
      ]);

      return {
        success: true,
        contactId: contactId,
      };
    } catch (error) {
      console.error('Create mailing contact error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to subscribe',
      };
    }
  }

  /**
   * Get blog posts from Odoo (optional - future feature)
   */
  async getBlogPosts(limit: number = 10): Promise<any[]> {
    try {
      const posts = await this.executeKw(
        'blog.post',
        'search_read',
        [[['website_published', '=', true]]],
        {
          fields: [
            'name',
            'subtitle',
            'content',
            'blog_id',
            'tag_ids',
            'author_id',
            'published_date',
          ],
          limit: limit,
          order: 'published_date DESC',
        }
      );

      return posts || [];
    } catch (error) {
      console.error('Get blog posts error:', error);
      return [];
    }
  }
}

// Create singleton instance
export const odooClient = new OdooClient({
  url: process.env.NEXT_PUBLIC_ODOO_URL || '',
  db: process.env.ODOO_DATABASE || '',
  username: process.env.ODOO_USERNAME || '',
  apiKey: process.env.ODOO_API_KEY || '',
});

export default odooClient;
```

---

### Updated `src/lib/api/crm.ts`

```typescript
import { odooClient } from './odoo';

/**
 * Submit contact form to Odoo CRM
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    const result = await odooClient.createLead({
      name: data.subject,
      contact_name: data.name,
      email_from: data.email,
      phone: data.phone || false,
      description: data.message,
      type: 'lead',
      x_source: 'contact_form',
      priority: '1', // Normal
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create lead');
    }

    // Optional: Send confirmation email
    await sendConfirmationEmail(data.email, data.name, 'contact');

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('Submit contact form error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

/**
 * Submit quote request to Odoo CRM
 */
export async function submitQuoteRequest(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  serviceType: string;
  propertyType: string;
  heatingArea?: string;
  estimatedCost?: string;
  message?: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    // Build description from form data
    const description = `
Angebotsanfrage für ${data.serviceType}

Objektdetails:
- Objektart: ${data.propertyType}
${data.heatingArea ? `- Heizfläche: ${data.heatingArea} m²` : ''}
${data.estimatedCost ? `- Geschätzte Kosten: ${data.estimatedCost} €` : ''}

${data.message ? `Zusätzliche Informationen:\n${data.message}` : ''}
    `.trim();

    const result = await odooClient.createLead({
      name: `Angebotsanfrage ${data.serviceType} - ${data.name}`,
      contact_name: data.name,
      email_from: data.email,
      phone: data.phone,
      street: data.address,
      zip: data.postalCode,
      city: data.city,
      description: description,
      type: 'opportunity', // Higher value than lead
      x_source: 'quote_request',
      x_service_type: data.serviceType,
      x_property_type: data.propertyType,
      x_heating_area: data.heatingArea ? parseInt(data.heatingArea) : undefined,
      x_estimated_cost: data.estimatedCost ? parseFloat(data.estimatedCost) : undefined,
      priority: '2', // High
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create opportunity');
    }

    await sendConfirmationEmail(data.email, data.name, 'quote');

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('Submit quote request error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

/**
 * Submit emergency service request to Odoo CRM (HIGH PRIORITY)
 */
export async function submitEmergencyRequest(data: {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  emergencyType: string;
  description: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    const result = await odooClient.createLead({
      name: `🚨 NOTFALL: ${data.emergencyType}`,
      contact_name: data.name,
      phone: data.phone,
      street: data.address,
      zip: data.postalCode,
      description: `NOTFALL-BESCHREIBUNG:\n${data.description}`,
      type: 'lead',
      x_source: 'emergency_service',
      x_emergency_type: data.emergencyType,
      priority: '3', // Very High (will trigger alerts)
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create emergency request');
    }

    // TODO: Implement SMS/WhatsApp notification to on-call team
    // await sendEmergencySMS(data.phone, result.leadId);

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('Submit emergency request error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte rufen Sie uns direkt an: +49 8234 9665900',
    };
  }
}

/**
 * Subscribe email to newsletter via Odoo mailing list
 */
export async function subscribeNewsletter(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await odooClient.createMailingContact(data.email);

    if (!result.success && result.error !== 'already_subscribed') {
      throw new Error(result.error || 'Failed to subscribe');
    }

    if (result.error === 'already_subscribed') {
      return {
        success: true,
        error: 'Sie sind bereits für unseren Newsletter angemeldet.',
      };
    }

    // Send welcome email
    await sendConfirmationEmail(data.email, '', 'newsletter');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Subscribe newsletter error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

/**
 * Send confirmation email (implement with Odoo mail templates or external service)
 */
async function sendConfirmationEmail(
  email: string,
  name: string,
  type: 'contact' | 'quote' | 'emergency' | 'newsletter'
): Promise<void> {
  // TODO: Implement email sending via Odoo mail.template or external service (e.g., SendGrid)
  // For now, Odoo can send automated emails via automated actions
  console.log(`Confirmation email sent to ${email} for ${type}`);

  // Example using Odoo mail.template:
  // await odooClient.executeKw('mail.template', 'send_mail', [
  //   templateId,
  //   leadId,
  //   { email_values: { email_to: email } }
  // ]);
}
```

---

## Testing Strategy

### Local Development Testing

#### 1. **Connection Test**

```bash
# Create test script
npx tsx scripts/test-odoo-connection.ts
```

Expected output:
```
Testing Odoo connection...
{ success: true, message: 'Successfully connected to Odoo. User ID: 2' }
```

#### 2. **Form Submission Tests**

**Test Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 8234 9665900",
    "subject": "Test Contact",
    "message": "This is a test message from API",
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

Verify in Odoo:
1. Go to CRM → Leads/Opportunities
2. Find lead with subject "Test Contact"
3. Check all fields are populated correctly

**Test Quote Request:** (similar curl with quote data)

**Test Emergency:** (similar curl with emergency data)

**Test Newsletter:**
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "gdprConsent": true,
    "honeypot": ""
  }'
```

Verify in Odoo:
1. Go to Mass Mailing → Mailing Lists → HeizCenter Newsletter
2. Check contact was added

---

### Automated Testing

**Create `tests/odoo-integration.test.ts`:**

```typescript
import { describe, it, expect } from 'vitest';
import { odooClient } from '../src/lib/api/odoo';
import { submitContactForm } from '../src/lib/api/crm';

describe('Odoo Integration', () => {
  it('should connect to Odoo', async () => {
    const result = await odooClient.testConnection();
    expect(result.success).toBe(true);
  });

  it('should create a lead', async () => {
    const result = await submitContactForm({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test',
      message: 'Test message',
    });
    expect(result.success).toBe(true);
    expect(result.leadId).toBeGreaterThan(0);
  });

  // Add more tests for quote, emergency, newsletter
});
```

Run: `npm run test`

---

## Security Considerations

### 1. **Environment Variables**
- ✅ Never commit `.env.local` to git
- ✅ Use different credentials for dev/staging/production
- ✅ Rotate API keys every 90 days
- ✅ Use read-only API user if possible (but CRM needs write access)

### 2. **Network Security**
- ✅ Use HTTPS for all Odoo communication
- ✅ Implement SSL certificate pinning if possible
- ✅ Whitelist website server IP in Odoo firewall
- ✅ Use VPN or private network for production

### 3. **Input Validation**
- ✅ Already implemented: Zod validation on frontend + backend
- ✅ Honeypot fields to prevent spam
- ✅ Rate limiting on API routes (implement if needed)

**Example rate limiting:**

```typescript
// src/middleware.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
});

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip ?? '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }
  }
}
```

### 4. **Error Handling**
- ✅ Don't expose internal errors to users
- ✅ Log all errors server-side
- ✅ Provide friendly error messages

### 5. **GDPR Compliance**
- ✅ Explicit consent checkboxes implemented
- ✅ Link to privacy policy in all forms
- ✅ Implement data deletion workflow in Odoo (user requests)
- ✅ Double opt-in for newsletter recommended

---

## Error Handling & Monitoring

### Error Scenarios & Handling

#### 1. **Odoo Server Unreachable**

```typescript
// In odooClient.authenticate()
catch (error) {
  if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
    // Server is down
    return {
      success: false,
      error: 'Service temporarily unavailable. Please try again later.'
    };
  }
}
```

**User-facing message:**
> "Entschuldigung, unser System ist vorübergehend nicht erreichbar. Bitte rufen Sie uns direkt an: +49 8234 9665900"

#### 2. **Authentication Failure**

```typescript
// Invalid credentials
if (response.status === 401) {
  // Log to monitoring system
  console.error('CRITICAL: Odoo authentication failed - check credentials');
  // Return generic error to user
  return {
    success: false,
    error: 'Service error. We have been notified.'
  };
}
```

#### 3. **Validation Errors**

Already handled by Zod - shows field-specific errors to user.

#### 4. **Network Timeouts**

```typescript
// Add timeout to fetch requests
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

const response = await fetch(url, {
  signal: controller.signal,
  // ... other options
});

clearTimeout(timeoutId);
```

---

### Monitoring & Alerting

#### 1. **Health Check Endpoint**

**Create `src/app/api/health/odoo/route.ts`:**

```typescript
import { NextResponse } from 'next/server';
import { odooClient } from '@/lib/api/odoo';

export async function GET() {
  const result = await odooClient.testConnection();

  if (result.success) {
    return NextResponse.json({ status: 'healthy', ...result });
  } else {
    return NextResponse.json(
      { status: 'unhealthy', ...result },
      { status: 503 }
    );
  }
}
```

**Monitor this endpoint with:**
- UptimeRobot (external monitoring)
- Datadog / New Relic (if available)
- Simple cron job

#### 2. **Error Logging**

**Integrate Sentry:**

```typescript
// src/lib/api/odoo.ts
import * as Sentry from '@sentry/nextjs';

catch (error) {
  Sentry.captureException(error, {
    tags: {
      service: 'odoo',
      operation: 'createLead',
    },
    extra: {
      leadData: leadData,
    },
  });
}
```

#### 3. **Alert on Critical Failures**

**Setup alerts for:**
- ❌ Authentication failures (credentials issue)
- ❌ Multiple consecutive failures (Odoo down)
- ❌ Emergency form submission failures (critical!)

**Use:**
- Sentry alerts
- Custom webhook to Slack/Teams
- Email alerts to dev team

---

## Deployment Checklist

### Pre-Deployment

- [ ] Odoo custom fields created
- [ ] Sales teams configured
- [ ] Mailing list created
- [ ] API user created with correct permissions
- [ ] Automated actions configured (optional)
- [ ] Test connection from dev environment
- [ ] All forms tested end-to-end
- [ ] Error scenarios tested
- [ ] SSL certificate valid on Odoo server
- [ ] Firewall rules configured
- [ ] Environment variables documented

### Deployment

- [ ] Add environment variables to Vercel/hosting
- [ ] Deploy website
- [ ] Test production API endpoints
- [ ] Monitor error logs
- [ ] Test with real user data (internal team)
- [ ] Verify leads appear in Odoo correctly
- [ ] Test emergency workflow (high priority!)

### Post-Deployment

- [ ] Monitor health check endpoint
- [ ] Set up alerting
- [ ] Schedule API key rotation (calendar reminder)
- [ ] Document troubleshooting procedures
- [ ] Train sales team on new lead sources in Odoo
- [ ] Update runbook with integration details

---

## Troubleshooting Guide

### Issue: "Failed to connect to Odoo"

**Possible causes:**
1. Odoo server is down
2. Firewall blocking request
3. Invalid URL in environment variable
4. Network issue

**Debug steps:**
```bash
# Test Odoo server manually
curl https://odoo.heizcenter.de/web/database/list

# Check from server (if SSH access)
ssh your-server
curl http://localhost:8069/web/database/list

# Verify environment variables
console.log(process.env.NEXT_PUBLIC_ODOO_URL);
```

---

### Issue: "Authentication failed"

**Possible causes:**
1. Invalid username/password
2. Wrong database name
3. API key expired
4. User lacks permissions

**Debug steps:**
```bash
# Test login manually in Odoo UI with same credentials
# Check user exists: Settings → Users → Search for API user
# Verify database name: grep db_name /etc/odoo/odoo.conf
# Regenerate API key in Odoo
```

---

### Issue: "Lead created but missing fields"

**Possible causes:**
1. Custom fields not created in Odoo
2. Field names mismatch
3. Invalid field values

**Debug steps:**
```python
# In Odoo shell (python3 odoo-bin shell -d your_db)
>>> lead = env['crm.lead'].browse(123)  # Lead ID
>>> lead.read()  # Check all fields
>>> env['ir.model.fields'].search([('model', '=', 'crm.lead'), ('name', 'like', 'x_')])  # List custom fields
```

---

### Issue: "Newsletter subscription not working"

**Check:**
1. Mailing list exists: Mass Mailing → Mailing Lists
2. Correct list ID in environment variable
3. Email is valid

---

## Summary

This integration plan provides a complete roadmap for connecting the HeizCenter Next.js website to a self-hosted Odoo instance.

**Key Highlights:**
- ✅ **Architecture is sound**: API routes, validation, forms all properly structured
- ⚠️ **Main work needed**: Implement XML-RPC communication in `odoo.ts` and `crm.ts`
- ✅ **Odoo setup**: Create custom fields, teams, mailing lists
- ✅ **Security**: HTTPS, API keys, rate limiting, GDPR compliance
- ✅ **Monitoring**: Health checks, error logging, alerts

**Estimated Implementation Time:**
- Odoo Backend Setup: 2-4 hours
- Code Implementation: 4-6 hours
- Testing & Debugging: 2-3 hours
- **Total: 8-13 hours**

**Next Steps:**
1. Set up Odoo backend (custom fields, teams, lists)
2. Implement `OdooClient` methods in `odoo.ts`
3. Replace stub functions in `crm.ts`
4. Test locally
5. Deploy to production
6. Monitor for first week

---

**Document Version:** 1.0
**Last Updated:** 2025-11-20
**Contact:** For questions, contact dev team

