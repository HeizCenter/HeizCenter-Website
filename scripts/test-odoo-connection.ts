/**
 * Test Odoo Connection Script
 *
 * Run with: npx tsx scripts/test-odoo-connection.ts
 *
 * This script tests the connection to your Odoo instance and validates
 * that all required environment variables are set correctly.
 */

import { odooClient } from '../src/lib/api/odoo';

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

async function main() {
  console.log(`${BLUE}===========================================${RESET}`);
  console.log(`${BLUE}  Odoo Connection Test${RESET}`);
  console.log(`${BLUE}===========================================${RESET}\n`);

  // Check environment variables
  console.log('1️⃣  Checking environment variables...\n');

  const requiredEnvVars = [
    'NEXT_PUBLIC_ODOO_URL',
    'ODOO_DATABASE',
    'ODOO_USERNAME',
    'ODOO_API_KEY',
  ];

  const optionalEnvVars = [
    'ODOO_SALES_TEAM_ID',
    'ODOO_EMERGENCY_TEAM_ID',
    'ODOO_NEWSLETTER_LIST_ID',
  ];

  let missingRequired = false;

  requiredEnvVars.forEach((envVar) => {
    if (process.env[envVar]) {
      console.log(`   ${GREEN}✓${RESET} ${envVar}: ${envVar === 'ODOO_API_KEY' ? '***' : process.env[envVar]}`);
    } else {
      console.log(`   ${RED}✗${RESET} ${envVar}: NOT SET`);
      missingRequired = true;
    }
  });

  console.log('');

  optionalEnvVars.forEach((envVar) => {
    if (process.env[envVar]) {
      console.log(`   ${GREEN}✓${RESET} ${envVar}: ${process.env[envVar]}`);
    } else {
      console.log(`   ${YELLOW}⚠${RESET} ${envVar}: Not set (will use default)`);
    }
  });

  console.log('');

  if (missingRequired) {
    console.log(`${RED}❌ Missing required environment variables!${RESET}`);
    console.log(`\nPlease set them in ${YELLOW}.env.local${RESET}:`);
    console.log(`
NEXT_PUBLIC_ODOO_URL=https://your-odoo-server.com
ODOO_DATABASE=your_database_name
ODOO_USERNAME=api@example.com
ODOO_API_KEY=your_api_key
    `);
    process.exit(1);
  }

  // Test connection
  console.log('2️⃣  Testing connection to Odoo...\n');

  try {
    const result = await odooClient.testConnection();

    if (result.success) {
      console.log(`   ${GREEN}✅ Connection successful!${RESET}`);
      console.log(`   User ID: ${result.uid}`);
      console.log(`   ${result.message}`);
    } else {
      console.log(`   ${RED}❌ Connection failed!${RESET}`);
      console.log(`   ${result.message}`);
      process.exit(1);
    }
  } catch (error) {
    console.log(`   ${RED}❌ Connection failed!${RESET}`);
    console.log(`   ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }

  console.log('');

  // Test creating a test lead (optional)
  console.log('3️⃣  Testing CRM lead creation (optional)...\n');
  console.log(`   ${YELLOW}⏩ Skipping (uncomment code to test)${RESET}`);

  // Uncomment to test lead creation:
  /*
  try {
    const testLeadResult = await odooClient.createLead({
      name: 'TEST - Connection Test',
      contact_name: 'Test User',
      email_from: 'test@example.com',
      phone: '+49 123 456789',
      description: 'This is a test lead created by the connection test script. Please delete.',
      type: 'lead',
      x_source: 'contact_form',
      priority: '0', // Low priority
    });

    if (testLeadResult.success) {
      console.log(`   ${GREEN}✅ Test lead created successfully!${RESET}`);
      console.log(`   Lead ID: ${testLeadResult.leadId}`);
      console.log(`   ${YELLOW}⚠ Please delete this test lead from Odoo CRM${RESET}`);
    } else {
      console.log(`   ${RED}❌ Failed to create test lead${RESET}`);
      console.log(`   ${testLeadResult.error}`);
    }
  } catch (error) {
    console.log(`   ${RED}❌ Failed to create test lead${RESET}`);
    console.log(`   ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  */

  console.log('');
  console.log(`${GREEN}===========================================${RESET}`);
  console.log(`${GREEN}  All tests passed!${RESET}`);
  console.log(`${GREEN}===========================================${RESET}\n`);

  console.log('Next steps:');
  console.log(`  1. Configure custom fields in Odoo (see ${YELLOW}ODOO_INTEGRATION_PLAN.md${RESET})`);
  console.log(`  2. Create sales teams and mailing lists`);
  console.log(`  3. Test form submissions from website`);
  console.log('');
}

main().catch((error) => {
  console.error(`${RED}Fatal error:${RESET}`, error);
  process.exit(1);
});
