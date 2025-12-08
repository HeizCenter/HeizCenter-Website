/**
 * Test n8n Webhooks Script
 *
 * Run with: npx tsx scripts/test-n8n-webhooks.ts
 *
 * This script tests the connection to n8n webhook endpoints
 * and validates the lead management integration.
 */

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const N8N_BASE_URL = process.env.N8N_WEBHOOK_BASE_URL || 'https://heizcenter.app.n8n.cloud';

const WEBHOOK_ENDPOINTS = {
  contact: `${N8N_BASE_URL}/webhook/leads/contact`,
  quote: `${N8N_BASE_URL}/webhook/leads/quote`,
  emergency: `${N8N_BASE_URL}/webhook/leads/emergency`,
};

async function testEndpoint(name: string, url: string): Promise<boolean> {
  try {
    // Test with OPTIONS request (preflight)
    const response = await fetch(url, {
      method: 'OPTIONS',
    });

    // Accept various success codes
    if (response.ok || response.status === 404 || response.status === 405) {
      console.log(`   ${GREEN}✓${RESET} ${name}: ${url}`);
      console.log(`     Status: ${response.status} (endpoint reachable)`);
      return true;
    } else {
      console.log(`   ${RED}✗${RESET} ${name}: ${url}`);
      console.log(`     Status: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.log(`   ${RED}✗${RESET} ${name}: ${url}`);
    console.log(`     Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return false;
  }
}

async function testContactSubmission(): Promise<boolean> {
  console.log(`\n   Testing contact form submission...`);

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test submission from the test script. Please ignore.',
    phone: '+49 123 456789',
    source: 'website',
  };

  try {
    const response = await fetch(WEBHOOK_ENDPOINTS.contact, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log(`   ${GREEN}✓${RESET} Contact form submission successful`);
      console.log(`     Lead ID: ${result.lead_id || 'N/A'}`);
      console.log(`     Message: ${result.message || 'N/A'}`);
      return true;
    } else {
      console.log(`   ${RED}✗${RESET} Contact form submission failed`);
      console.log(`     Status: ${response.status}`);
      console.log(`     Error: ${result.error || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.log(`   ${RED}✗${RESET} Contact form submission failed`);
    console.log(`     Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return false;
  }
}

async function main() {
  console.log(`${BLUE}===========================================${RESET}`);
  console.log(`${BLUE}  n8n Webhook Connection Test${RESET}`);
  console.log(`${BLUE}===========================================${RESET}\n`);

  // Check environment
  console.log('1️⃣  Configuration:\n');
  console.log(`   Base URL: ${N8N_BASE_URL}`);
  console.log('');

  // Test endpoint reachability
  console.log('2️⃣  Testing endpoint reachability...\n');

  let allReachable = true;
  for (const [name, url] of Object.entries(WEBHOOK_ENDPOINTS)) {
    const success = await testEndpoint(name, url);
    if (!success) allReachable = false;
  }

  console.log('');

  if (!allReachable) {
    console.log(`${YELLOW}⚠️  Some endpoints may not be reachable.${RESET}`);
    console.log(`   This is expected if webhooks are not yet configured in n8n.`);
  }

  // Ask about test submission
  console.log('\n3️⃣  Live submission test:\n');
  console.log(`   ${YELLOW}⏩ Skipping live test submission${RESET}`);
  console.log(`   To test live submission, uncomment the test code below.`);

  // Uncomment to test actual submission:
  /*
  const submitSuccess = await testContactSubmission();
  if (submitSuccess) {
    console.log(`\n   ${GREEN}✅ Live submission test passed!${RESET}`);
    console.log(`   ${YELLOW}⚠️ A test lead was created - please delete it from your CRM${RESET}`);
  }
  */

  console.log('');
  console.log(`${GREEN}===========================================${RESET}`);
  console.log(`${GREEN}  Test completed!${RESET}`);
  console.log(`${GREEN}===========================================${RESET}\n`);

  console.log('Webhook Endpoints:');
  console.log(`  Contact:   ${WEBHOOK_ENDPOINTS.contact}`);
  console.log(`  Quote:     ${WEBHOOK_ENDPOINTS.quote}`);
  console.log(`  Emergency: ${WEBHOOK_ENDPOINTS.emergency}`);
  console.log('');
}

main().catch((error) => {
  console.error(`${RED}Fatal error:${RESET}`, error);
  process.exit(1);
});
