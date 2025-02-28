
import { Types } from "mongoose";
import { connectToDB } from "../lib/db";
import Order, { IOrder } from "../models/Order";

export const createOrder = async (userId: string, items: { product: string; quantity: number; price: number }[]): Promise<IOrder> => {
  await connectToDB();

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const newOrder = await Order.create({
    user: new Types.ObjectId(userId),
    items,
    totalAmount,
    paymentStatus: "pending",
    orderStatus: "pending",
  });

  return newOrder;
};

export const getOrdersByUser = async (userId: string): Promise<IOrder[]> => {
  await connectToDB();
  return await Order.find({ user: userId }).populate("items.product");
};

export const getOrderById = async (orderId: string): Promise<IOrder | null> => {
  await connectToDB();
  return await Order.findById(orderId).populate("items.product");
};

export const updateOrderStatus = async (orderId: string, status: "shipped" | "delivered" | "cancelled"): Promise<IOrder | null> => {
  await connectToDB();
  return await Order.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });
};

export const deleteOrder = async (orderId: string): Promise<IOrder | null> => {
  await connectToDB();
  return await Order.findByIdAndDelete(orderId);
};
