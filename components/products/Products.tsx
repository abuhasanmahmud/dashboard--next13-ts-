import React from "react";
import ProductTable from "./ProductTable";
import { fetchAllProduct } from "@/lib/actions/product.action";

const Products = async () => {
  const allproduct = await fetchAllProduct();
  console.log("allproudct", allproduct);
  return (
    <>
      <ProductTable products={allproduct} />
    </>
  );
};

export default Products;
