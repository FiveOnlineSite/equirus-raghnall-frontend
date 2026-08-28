import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_USERNAME = process.env.INITIAL_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.INITIAL_ADMIN_PASSWORD;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  throw new Error(
    "INITIAL_ADMIN_USERNAME or INITIAL_ADMIN_PASSWORD is missing",
  );
}

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "admin",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

async function createAdmin() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");

    const username = ADMIN_USERNAME.toLowerCase();

    const existingAdmin = await Admin.findOne({
      username,
    });

    if (existingAdmin) {
      console.log("Admin already exists:", username);

      await mongoose.disconnect();
      return;
    }

    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

    await Admin.create({
      name: "Administrator",
      username,
      passwordHash,
      role: "admin",
      isActive: true,
    });

    console.log("Admin created successfully");

    console.log("Username:", username);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error creating admin:", error);

    await mongoose.disconnect();

    process.exit(1);
  }
}

createAdmin();
