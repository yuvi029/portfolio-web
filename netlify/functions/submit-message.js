import mongoose from "mongoose";

let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

// Define schema
const MessageSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email:    { type: String, required: true, lowercase: true, trim: true },
  message:  { type: String, required: true, maxlength: 500 },
  createdAt:{ type: Date, default: Date.now }
});

// Prevent model overwrite during hot-reload
const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

// MongoDB connection
async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = process.env.MONGODB_URI; // stored in .env
    cached.promise = mongoose.connect(uri, { dbName: "contactForm" });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Netlify handler
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: { Allow: "POST" }, body: "Method Not Allowed" };
  }

  try {
    const { fullName, email, message } = JSON.parse(event.body || "{}");
    if (!fullName || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "All fields are required" }) };
    }

    await dbConnect();
    const doc = await Message.create({ fullName, email, message });

    return { statusCode: 200, body: JSON.stringify({ success: true, id: doc._id }) };
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  }
}
