import { connectToDB } from "../lib/db";
import Product, { IProduct } from "../models/Product";


export const getAllProducts = async (): Promise<IProduct[]> => {
  await connectToDB();
  return await Product.find({});
};

export const getProductById = async (id: string): Promise<IProduct | null> => {
  await connectToDB();
  return await Product.findById(id);
};

export const createProduct = async (data: IProduct): Promise<IProduct> => {
  await connectToDB();
  return await Product.create(data);
};

export const updateProduct = async (id: string, data: Partial<IProduct>): Promise<IProduct | null> => {
  await connectToDB();
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  await connectToDB();
  return await Product.findByIdAndDelete(id);
};
