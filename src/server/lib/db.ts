import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const options: ConnectOptions = {
      // You can add additional options here if needed, like:
      // user: 'yourUsername',
      // pass: 'yourPassword',
      // dbName: 'yourDatabaseName',
    };


    const connection = await mongoose.connect(dbUri, options);
    isConnected = true;

    console.log('MongoDB connected');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};