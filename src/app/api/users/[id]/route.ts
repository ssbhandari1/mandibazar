import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/server/lib/db";
import User from "@/server/models/User";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const user = await User.findById(params.id).select("-password");
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const { name, email, password } = await req.json();

    let updatedData: any = { name, email };

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(params.id, updatedData, { new: true }).select("-password");

    if (!updatedUser) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const deletedUser = await User.findByIdAndDelete(params.id);

    if (!deletedUser) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete user", error }, { status: 500 });
  }
}
