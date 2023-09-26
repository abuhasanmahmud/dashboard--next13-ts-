import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  des: {
    type: String,
  },
  status: {
    type: String,
    default: "Publish",
  },
  price: {
    type: String,
  },
  category: {
    type: "String",
  },
  size: {
    type: "String",
    enum: ["XL", "L", "M", "S", "XS"],
  },
  stock: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
  },
});

const Product = models?.Product || model("Product", productSchema);

export default Product;
