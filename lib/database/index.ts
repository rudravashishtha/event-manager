import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cachedDb.conn) return cachedDb;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cachedDb.promise =
    cachedDb ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cachedDb.conn = await cachedDb.promise;

  return cachedDb.conn;
};
