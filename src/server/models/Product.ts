import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  unit: string;
  imageUrl: string;
  inStock: boolean;
  quantity: number;
  category: string;
  ratings: number;
  reviews: number;
  weight: string;
  expiryDate?: Date;
  tags: string[];
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    discount: { type: String },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    ratings: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    weight: { type: String, required: true },
    expiryDate: { type: Date },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
