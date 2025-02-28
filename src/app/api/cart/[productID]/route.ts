import { addToCart, updateCartItem, removeCartItem  } from "../../../../server/services/cart";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { productId: string } }) {
  const userId = req.headers.get("userId");
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { quantity } = await req.json();
  if (!quantity || quantity < 1) return NextResponse.json({ message: "Invalid quantity" }, { status: 400 });

  const cart = await addToCart(userId, params.productId, quantity);
  return NextResponse.json(cart, { status: 201 });
}

export async function PUT(req: NextRequest, { params }: { params: { productId: string } }) {
  const userId = req.headers.get("userId");
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { quantity } = await req.json();
  if (quantity < 1) return NextResponse.json({ message: "Quantity must be at least 1" }, { status: 400 });

  const cart = await updateCartItem(userId, params.productId, quantity);
  return NextResponse.json(cart, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: { productId: string } }) {
  const userId = req.headers.get("userId");
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const cart = await removeCartItem(userId, params.productId);
  return NextResponse.json(cart, { status: 200 });
}
