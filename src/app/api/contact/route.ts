import { NextResponse } from 'next/server';
import { saveContactInquiry } from '@/lib/dynamodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, intake, major, message } = body;

    // Server-side validation of mandatory fields
    if (!name || !email || !major || !message) {
      return NextResponse.json(
        { error: 'Missing mandatory fields' },
        { status: 400 }
      );
    }

    // Call service layer to save (safely falls back to local log/mock if DynamoDB is absent)
    const savedInquiry = await saveContactInquiry({
      name,
      email,
      phone: phone || '',
      preferredIntake: intake,
      intendedMajor: major,
      message
    });

    return NextResponse.json(
      { success: true, inquiry: savedInquiry },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact POST api route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
