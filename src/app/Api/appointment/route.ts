import { NextRequest, NextResponse } from 'next/server';

// Handle POST request
export async function POST(req: NextRequest) {
  const body = await req.json();

  // Do your business logic with `body`
  if (!body.customerName || !body.appointmentDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Return success response
  return NextResponse.json({ success: true, message: 'Appointment created' }, { status: 200 });
}

// Optionally handle GET request if needed
export async function GET() {
  return NextResponse.json({ message: 'GET request received' }, { status: 200 });
}
