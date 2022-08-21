import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const JobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a company name"],
    },
    position: {
      type: String,
      required: [true, "Please provide a position"],
    },
    status: {
      type: String,
      enum: ["pending", "interview", "decline"],
      default: "pending",
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "Please provide username"],
    },
  },
  { timestamps: true }
);

export default model("Job", JobSchema);
