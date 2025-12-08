import { NextResponse } from 'next/server';
import { testN8nConnection } from '@/lib/api/n8n-webhooks';

/**
 * Health check endpoint for n8n webhook connectivity
 *
 * Returns:
 * - 200 if n8n server is reachable
 * - 503 if n8n server is unreachable
 *
 * Use for monitoring:
 * - UptimeRobot
 * - Datadog / New Relic
 * - Custom monitoring scripts
 */
export async function GET() {
  try {
    const result = await testN8nConnection();

    if (result.success) {
      return NextResponse.json(
        {
          status: 'healthy',
          service: 'n8n-webhooks',
          message: result.message,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: 'unhealthy',
          service: 'n8n-webhooks',
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
        service: 'n8n-webhooks',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
