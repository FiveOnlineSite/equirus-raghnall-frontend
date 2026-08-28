import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function requireApiAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    return null;
  }

  const admin = await verifyToken(token);

  if (!admin || admin.role !== "admin") {
    return null;
  }

  return admin;
}

export function unauthorizedResponse() {
  return Response.json(
    {
      success: false,
      message: "Unauthorized.",
    },
    { status: 401 },
  );
}
