import { connectDB } from "@/lib/mongodb";
import Banner from "@/models/Banner";
import {
  requireApiAdmin,
  unauthorizedResponse,
} from "@/lib/requireApiAdmin";

export async function GET(request, { params }) {
  const admin = await requireApiAdmin();

  if (!admin) {
    return unauthorizedResponse();
  }

  try {
    await connectDB();

    const { page } = await params;

    if (!page) {
      return Response.json(
        {
          success: false,
          message: "Page slug is required.",
        },
        { status: 400 }
      );
    }

    const banner = await Banner.findOne({
      page,
    });

    // No banner exists yet — this is not really an error
    if (!banner) {
      return Response.json({
        success: true,
        banner: null,
      });
    }

    return Response.json({
      success: true,
      banner,
    });
  } catch (error) {
    console.error("Banner fetch error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to fetch banner.",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const admin = await requireApiAdmin();

  if (!admin) {
    return unauthorizedResponse();
  }

  try {
    await connectDB();

    const { page } = await params;

    if (!page) {
      return Response.json(
        {
          success: false,
          message: "Page slug is required.",
        },
        { status: 400 }
      );
    }

    const { imageKey, altText } = await request.json();

    if (!imageKey) {
      return Response.json(
        {
          success: false,
          message: "Banner image is required.",
        },
        { status: 400 }
      );
    }

    const banner = await Banner.findOneAndUpdate(
      {
        page,
      },
      {
        page,
        imageKey,
        altText: altText || "",
      },
      {
        new: true,
        upsert: true,
      }
    );

    return Response.json({
      success: true,
      banner,
    });
  } catch (error) {
    console.error("Banner update error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to update banner.",
      },
      { status: 500 }
    );
  }
}
