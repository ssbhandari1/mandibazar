
import bcrypt from "bcryptjs";
import User, { IUser } from "../models/User";
import { connectToDB } from "../lib/db";

export const getAllUsers = async (): Promise<IUser[]> => {
  await connectToDB();
  return await User.find().select("-password");
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  await connectToDB();
  return await User.findById(id).select("-password");
};

export const createUser = async (name: string, email: string, password: string): Promise<IUser> => {
  await connectToDB();

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({ name, email, password: hashedPassword });
};

export const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> => {
  await connectToDB();

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await User.findByIdAndUpdate(id, data, { new: true }).select("-password");
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  await connectToDB();
  return await User.findByIdAndDelete(id);
};
