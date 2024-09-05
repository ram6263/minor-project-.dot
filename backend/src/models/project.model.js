import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    previewImage: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    demoVideoFile: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments : [
      {
        type : Schema.Types.ObjectId,
        ref : "Comment"
      }
    ]
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model("Project", projectSchema);
