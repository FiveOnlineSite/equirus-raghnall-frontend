import "server-only";

import { connectDB } from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function getBanner(pageSlug) {
  try {
    await connectDB();

    const banner = await Banner.findOne({
      page: pageSlug,
    }).lean();

    if (!banner) {
      return null;
    }

    const cdnUrl = (
      process.env.NEXT_PUBLIC_AWS_CDN_URL || ""
    ).replace(/\/$/, "");

    const imageUrl =
      banner.imageKey && cdnUrl
        ? `${cdnUrl}/${banner.imageKey.replace(/^\//, "")}`
        : "";

    return {
      imageUrl,
      imageKey: banner.imageKey || "",
      altText: banner.altText || "",
    };
  } catch (error) {
    console.error(
      `Unable to fetch banner for ${pageSlug}:`,
      error
    );

    return null;
  }
}
