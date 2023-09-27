import Orders from "@/components/Orders/Orders";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<Orders />} />
    </>
  );
};

export default page;
