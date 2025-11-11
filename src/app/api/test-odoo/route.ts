import { NextResponse } from 'next/server';
import { testOdooConnection } from '@/lib/api/odoo';

export async function GET() {
  try {
    const result = await testOdooConnection();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
