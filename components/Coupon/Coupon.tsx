import React from "react";
import CouponTable from "./CouponTable";
import { fetchAllCoupon } from "@/lib/actions/coupon.action";

const Coupon = async () => {
  const allCoupon = await fetchAllCoupon();
  return (
    <>
      <CouponTable coupons={allCoupon} />
    </>
  );
};

export default Coupon;
