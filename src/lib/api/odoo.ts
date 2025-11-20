/**
 * Odoo API Client
 *
 * This module handles authentication and communication with your self-hosted Odoo instance.
 * Odoo uses JSON-RPC for API communication.
 *
 * Required Environment Variables:
 * - NEXT_PUBLIC_ODOO_URL: Your Odoo server URL (e.g., https://odoo.heizcenter.de)
 * - ODOO_DATABASE: Your Odoo database name
 * - ODOO_USERNAME: API user email
 * - ODOO_API_KEY: API key or password
 * - ODOO_SALES_TEAM_ID: CRM sales team ID (optional, defaults to 1)
 * - ODOO_EMERGENCY_TEAM_ID: Emergency team ID (optional, defaults to 2)
 * - ODOO_NEWSLETTER_LIST_ID: Mailing list ID (optional, defaults to 1)
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

interface OdooLeadData {
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
}

class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;
  private sessionId: string | null = null;

  constructor() {
    this.config = {
      url: ODOO_URL,
      db: ODOO_DB,
      username: ODOO_USERNAME,
      apiKey: ODOO_API_KEY,
    };
  }

  /**
   * Authenticate with Odoo and get user ID
   */
  private async authenticate(): Promise<number> {
    if (this.uid !== null) {
      return this.uid; // Return cached UID
    }

    if (!this.config.url || !this.config.db || !this.config.username || !this.config.apiKey) {
      throw new Error('Missing Odoo configuration. Please set all required environment variables.');
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
          method: 'call',
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
        throw new Error(`Odoo error: ${data.error.data?.message || data.error.message}`);
      }

      if (!data.result || !data.result.uid) {
        throw new Error('Authentication failed: No UID returned');
      }

      this.uid = data.result.uid;
      this.sessionId = data.result.session_id || null;

      console.log('✅ Odoo authentication successful. UID:', this.uid);

      if (this.uid === null) {
        throw new Error('Authentication failed: Invalid UID');
      }

      return this.uid;
    } catch (error) {
      console.error('❌ Odoo authentication error:', error);
      this.uid = null;
      this.sessionId = null;
      throw new Error('Failed to connect to Odoo. Please try again later.');
    }
  }

  /**
   * Execute Odoo model method via JSON-RPC
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async executeKw(
    model: string,
    method: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: any[] = [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kwargs: Record<string, any> = {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    await this.authenticate();
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
                ...kwargs.context,
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
  async testConnection(): Promise<{ success: boolean; message: string; uid?: number }> {
    try {
      const uid = await this.authenticate();
      return {
        success: true,
        message: `Successfully connected to Odoo. User ID: ${uid}`,
        uid: uid,
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
  async createLead(leadData: OdooLeadData): Promise<{
    success: boolean;
    leadId?: number;
    error?: string;
  }> {
    try {
      // Set default values
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = {
        type: 'lead',
        priority: '1',
        user_id: false,
        team_id: parseInt(process.env.ODOO_SALES_TEAM_ID || '1'),
        ...leadData,
      };

      // Override team and priority for emergency requests
      if (leadData.x_source === 'emergency_service') {
        data.team_id = parseInt(process.env.ODOO_EMERGENCY_TEAM_ID || data.team_id.toString());
        data.priority = '3'; // Very High
      }

      // Clean up undefined values
      Object.keys(data).forEach(key => {
        if (data[key] === undefined) {
          delete data[key];
        }
      });

      console.log('Creating Odoo lead with data:', { ...data, phone: data.phone ? '***' : false });

      const leadId = await this.executeKw('crm.lead', 'create', [[data]]);

      console.log('✅ Odoo lead created successfully. ID:', leadId);

      return {
        success: true,
        leadId: leadId,
      };
    } catch (error) {
      console.error('❌ Create lead error:', error);
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

      console.log(`Subscribing ${email} to mailing list ${listId}...`);

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
        const subscriptionListIds = contact.subscription_list_ids || [];
        const subscribed = subscriptionListIds.some((id: number) => id === listId);

        if (subscribed) {
          console.log('ℹ️ Email already subscribed to newsletter');
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

        console.log('✅ Email added to mailing list. Contact ID:', contact.id);

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

      console.log('✅ New mailing contact created. ID:', contactId);

      return {
        success: true,
        contactId: contactId,
      };
    } catch (error) {
      console.error('❌ Create mailing contact error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to subscribe',
      };
    }
  }

  /**
   * Get blog posts from Odoo (optional - future feature)
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
export const odooClient = new OdooClient();

// Helper function to test Odoo connection
export async function testOdooConnection() {
  return await odooClient.testConnection();
}

export default odooClient;
