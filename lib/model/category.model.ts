import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  //   parent: {
  //     type: String,
  //     required: true,
  //   },
  //   slug: {
  //     type: String,
  //     required: false,
  //   },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

  des: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: false,
  },
  //   children: [{}],
  status: {
    type: String,
    enum: ["show", "hide"],
    default: "show",
  },
});

const Category = models?.Category || model("Category", categorySchema);

export default Category;
