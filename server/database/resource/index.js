import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

export const ResourceModel = mongoose.model("Resource", resourceSchema);
