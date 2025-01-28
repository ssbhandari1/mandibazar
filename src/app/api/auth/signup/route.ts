import { NextResponse } from 'next/server';
import {  addUser } from '@/server/users/service';
import { connectToDB } from '@/server/lib/db';

// Handle POST requests
export async function POST(request: Request) {
  function isError(obj: unknown): obj is Error {
    return typeof obj === "object" && obj !== null && "message" in obj;
}
  try {
    await connectToDB();

    const body = await request.json();
    const newUser = await addUser(body);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: unknown) {
    if (isError(error)) {
      return NextResponse.json({ message: error.message }, { status: 400 });
  }
  return NextResponse.json({ message: "An unknown error occurred" }, { status: 400 });
  }
}