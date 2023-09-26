import Products from "@/components/products/Products";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<Products />} />
    </>
  );
};

export default page;
