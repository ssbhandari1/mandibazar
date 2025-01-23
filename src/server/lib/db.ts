import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mandi';
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any;

    const connection = await mongoose.connect(dbUri, options);
    isConnected = true;

    console.log('MongoDB connected');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};