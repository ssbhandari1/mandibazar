import { clearCart, getCartByUserId } from "../../../server/services/cart";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.headers.get("userId"); // Assume userId is sent in headers (Replace with proper auth later)
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const cart = await getCartByUserId(userId);
  return NextResponse.json(cart || { items: [] }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const userId = req.headers.get("userId");
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const cart = await clearCart(userId);
  return NextResponse.json(cart, { status: 200 });
}
