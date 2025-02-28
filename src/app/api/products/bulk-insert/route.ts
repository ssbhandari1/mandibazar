import { NextResponse } from "next/server";

import Product from "@/server/models/Product";
import { connectToDB } from "@/server/lib/db";

export async function POST(req: Request) {
  try {
    await connectToDB(); // Connect to MongoDB
    const body = await req.json(); // Get data from request

    // Ensure it's an array of products
    if (!Array.isArray(body)) {
      return NextResponse.json({ message: "Invalid data format" }, { status: 400 });
    }

    const insertedProducts = await Product.insertMany(body); // Bulk insert

    return NextResponse.json({ message: "Products added", data: insertedProducts }, { status: 201 });
  } catch (error) {
    console.error("Bulk insert error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
