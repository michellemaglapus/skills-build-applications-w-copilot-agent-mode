import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
    return mongoose;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export default mongoose;
