import Category from "@/components/Category/Category";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<Category />} />
    </>
  );
};

export default page;
