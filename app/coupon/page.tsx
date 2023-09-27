import Coupon from "@/components/Coupon/Coupon";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<Coupon />} />
    </>
  );
};

export default page;
