import { connectToDB } from "@/server/lib/db";
import Product from "@/server/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find({});
    console.log('products',products)
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const newProduct = await Product.create(data);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create product", error }, { status: 500 });
  }
}

