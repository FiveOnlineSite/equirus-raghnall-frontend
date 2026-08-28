import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { s3 } from "@/lib/s3";
import {
  requireApiAdmin,
  unauthorizedResponse,
} from "@/lib/requireApiAdmin";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const allowedImageTypes = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request) {
  const admin = await requireApiAdmin();

  if (!admin) {
    return unauthorizedResponse();
  }

  try {
    const { fileType, fileSize, page } = await request.json();

    if (!allowedImageTypes[fileType]) {
      return Response.json(
        {
          success: false,
          message: "Only JPG, PNG and WebP images are allowed.",
        },
        { status: 400 }
      );
    }

    if (
      !Number.isInteger(fileSize) ||
      fileSize <= 0 ||
      fileSize > MAX_FILE_SIZE
    ) {
      return Response.json(
        {
          success: false,
          message: "Image size must be below 10 MB.",
        },
        { status: 400 },
      );
    }

    if (!page || !/^[a-z0-9-]+$/.test(page)) {
      return Response.json(
        {
          success: false,
          message: "Invalid service page.",
        },
        { status: 400 },
      );
    }

    const extension = allowedImageTypes[fileType];
    const key = `banners/${page}/${Date.now()}-${crypto.randomUUID()}.${extension}`;

    const upload = await createPresignedPost(s3, {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Fields: {
        "Content-Type": fileType,
      },
      Conditions: [
        ["content-length-range", 1, MAX_FILE_SIZE],
        ["eq", "$Content-Type", fileType],
      ],
      Expires: 300,
    });

    return Response.json({
      success: true,
      uploadUrl: upload.url,
      fields: upload.fields,
      key,
    });
  } catch (error) {
    console.error("S3 upload URL error:", error);

    return Response.json(
      { message: "Unable to create upload URL." },
      { status: 500 }
    );
  }
}
