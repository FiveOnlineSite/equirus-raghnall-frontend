import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
    },

    imageKey: {
      type: String,
      required: true,
    },

    altText: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Banner ||
  mongoose.model("Banner", bannerSchema);