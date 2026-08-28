import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    await connectDB();

    const { username, password } =
      await request.json();

    // Check fields
    if (!username || !password) {
      return Response.json(
        {
          success: false,
          message:
            "Username and password are required",
        },
        {
          status: 400,
        }
      );
    }

    // Find admin
    const admin = await Admin.findOne({
      username: username
        .toLowerCase()
        .trim(),
    });

    if (!admin) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid username or password",
        },
        {
          status: 401,
        }
      );
    }

    // Check if account is active
    if (!admin.isActive) {
      return Response.json(
        {
          success: false,
          message:
            "Admin account is disabled",
        },
        {
          status: 403,
        }
      );
    }

    // Compare password with hashed password
    const passwordMatches =
      await bcrypt.compare(
        password,
        admin.passwordHash
      );

    if (!passwordMatches) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid username or password",
        },
        {
          status: 401,
        }
      );
    }

    // Create login token
    const token = await createToken(admin);

    // Save token in secure cookie
    const cookieStore =
      await cookies();

    cookieStore.set(
      "admin_token",
      token,
      {
        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite: "lax",

        maxAge: 60 * 60 * 8,

        path: "/",
      }
    );

    return Response.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error(
      "Admin login error:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
