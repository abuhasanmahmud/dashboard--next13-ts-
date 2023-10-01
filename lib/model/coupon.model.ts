import { Schema, model, models } from "mongoose";

const couponSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: false,
    },

    couponCode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
    endTime: {
      type: Date,
      required: false,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Coupon = models?.Coupon || model("Coupon", couponSchema);

export default Coupon;
