import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { connectToDB } from "@/server/lib/db";
import User from "@/server/models/User";

export async function GET() {
  try {
    await connectToDB();
    const users = await User.find().select("-password"); // Exclude password from response
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User created successfully", userId: newUser._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create user", error }, { status: 500 });
  }
}
