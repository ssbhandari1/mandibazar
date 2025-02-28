import { connectToDB } from "@/server/lib/db";
import Product from "@/server/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const product = await Product.findById(params.id);
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const data = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedProduct) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update product", error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const deletedProduct = await Product.findByIdAndDelete(params.id);
    if (!deletedProduct) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete product", error }, { status: 500 });
  }
}
