/**
 * Odoo API Client
 *
 * This module handles authentication and communication with your self-hosted Odoo instance.
 * Odoo uses XML-RPC for API communication.
 *
 * Required Environment Variables:
 * - NEXT_PUBLIC_ODOO_URL: Your Odoo server URL (e.g., https://your-server.com)
 * - ODOO_DATABASE: Your Odoo database name
 * - ODOO_USERNAME: API user email
 * - ODOO_API_KEY: API key or password
 */

const ODOO_URL = process.env.NEXT_PUBLIC_ODOO_URL || '';
const ODOO_DB = process.env.ODOO_DATABASE || '';
const ODOO_USERNAME = process.env.ODOO_USERNAME || '';
const ODOO_API_KEY = process.env.ODOO_API_KEY || '';

interface OdooConfig {
  url: string;
  db: string;
  username: string;
  apiKey: string;
}

class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;

  constructor() {
    this.config = {
      url: ODOO_URL,
      db: ODOO_DB,
      username: ODOO_USERNAME,
      apiKey: ODOO_API_KEY,
    };
  }

  /**
   * Test connection to Odoo server
   */
  async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      if (!this.config.url || !this.config.db) {
        return {
          success: false,
          message: 'Missing Odoo configuration. Please set environment variables.',
        };
      }

      // For self-hosted Odoo, we typically use XML-RPC endpoints
      const authUrl = `${this.config.url}/web/session/authenticate`;

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

      const data = await response.json();

      if (data.result && data.result.uid) {
        this.uid = data.result.uid;
        return {
          success: true,
          message: `Successfully connected to Odoo! User ID: ${this.uid}`,
        };
      }

      return {
        success: false,
        message: data.error?.data?.message || 'Authentication failed',
      };
    } catch (error) {
      return {
        success: false,
        message: `Connection error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  }

  /**
   * Fetch blog posts from Odoo
   */
  async getBlogPosts(limit: number = 10) {
    // This will be implemented once we have Odoo credentials
    // Typically uses /web/dataset/search_read endpoint
    return [];
  }

  /**
   * Create a lead in Odoo CRM from contact form
   */
  async createLead(data: {
    name: string;
    email: string;
    phone?: string;
    description: string;
  }) {
    // This will be implemented once we have Odoo credentials
    // Typically uses /web/dataset/call_kw endpoint
    return { success: false, message: 'Not implemented yet' };
  }
}

export const odooClient = new OdooClient();

// Helper function to test Odoo connection
export async function testOdooConnection() {
  return await odooClient.testConnection();
}
