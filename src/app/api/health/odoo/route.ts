import { NextResponse } from 'next/server';
import { odooClient } from '@/lib/api/odoo';

/**
 * Health check endpoint for Odoo connection
 *
 * Returns:
 * - 200 if Odoo is reachable and authentication works
 * - 503 if Odoo is unreachable or authentication fails
 *
 * Use for monitoring:
 * - UptimeRobot
 * - Datadog / New Relic
 * - Custom monitoring scripts
 */
export async function GET() {
  try {
    const result = await odooClient.testConnection();

    if (result.success) {
      return NextResponse.json(
        {
          status: 'healthy',
          message: result.message,
          uid: result.uid,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: 'unhealthy',
          message: result.message,
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
