
import { Types } from "mongoose";
import { connectToDB } from "../lib/db";
import Cart, { ICart } from "../models/Cart";

export const getCartByUserId = async (userId: string): Promise<ICart | null> => {
  await connectToDB();
  return await Cart.findOne({ user: userId }).populate("items.product");
};

export const addToCart = async (userId: string, productId: string, quantity: number): Promise<ICart> => {
  await connectToDB();

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({ user: userId, items: [{ product: new Types.ObjectId(productId), quantity }] });
  } else {
    const existingItem = cart.items.find((item) => item.product.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: new Types.ObjectId(productId), quantity });
    }
    await cart.save();
  }

  return cart;
};

export const updateCartItem = async (userId: string, productId: string, quantity: number): Promise<ICart | null> => {
  await connectToDB();

  const cart = await Cart.findOne({ user: userId });

  if (!cart) return null;

  const item = cart.items.find((item) => item.product.toString() === productId);

  if (item) {
    item.quantity = quantity;
    await cart.save();
  }

  return cart;
};

export const removeCartItem = async (userId: string, productId: string): Promise<ICart | null> => {
  await connectToDB();

  const cart = await Cart.findOneAndUpdate(
    { user: userId },
    { $pull: { items: { product: new Types.ObjectId(productId) } } },
    { new: true }
  );

  return cart;
};

export const clearCart = async (userId: string): Promise<ICart | null> => {
  await connectToDB();

  return await Cart.findOneAndUpdate({ user: userId }, { items: [] }, { new: true });
};
