import { Schema, model, models } from "mongoose";

const StaffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);
const Staff = models?.Staff || model("Staff", StaffSchema);

export default Staff;
