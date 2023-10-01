import React from "react";
import CategoryTable from "./CategoryTable";
import { fetchAllCategory } from "@/lib/actions/category.action";

const Category = async () => {
  const allCategory = await fetchAllCategory();
  // console.log("all Category", allCategory);
  return (
    <div>
      <p>Category page</p>
      <CategoryTable categorys={allCategory} />
    </div>
  );
};

export default Category;
