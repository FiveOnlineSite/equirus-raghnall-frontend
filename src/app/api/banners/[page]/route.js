import { getBanner } from "@/lib/getBanner";

export async function GET(_request, { params }) {
  const { page } = await params;

  if (!page) {
    return Response.json(
      { success: false, message: "Page slug is required." },
      { status: 400 },
    );
  }

  const banner = await getBanner(page);

  return Response.json({
    success: true,
    banner,
  });
}
