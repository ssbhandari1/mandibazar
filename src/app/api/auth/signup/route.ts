import { NextResponse } from 'next/server';
import {  addUser } from '@/server/users/service';
import { connectToDB } from '@/server/lib/db';

// Handle POST requests
export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();
    const newUser = await addUser(body);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}