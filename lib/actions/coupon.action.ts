"use server";

import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";
import Coupon from "../model/coupon.model";

export async function addCoupon({ couponData, path }: any) {
  // console.log("product data", productData);
  connectToDB();
  try {
    const createCoupon = await Coupon.create(couponData);
    revalidatePath(path);

    return createCoupon;
  } catch (error: any) {
    throw new Error(`Error in add Coupon ${error.message}`);
  }
}

export async function fetchAllCoupon() {
  connectToDB();
  try {
    const allCoupon = await Coupon.find();
    //     console.log("allProducts", allProducts);
    return allCoupon;
  } catch (error: any) {
    throw new Error(`fetching coupon ${error.message}`);
  }
}

export async function deleteCoupon({ id, path }: any) {
  connectToDB();
  try {
    const deleteCoupon = await Coupon.findByIdAndRemove(id);
    revalidatePath(path);
    return deleteCoupon;
  } catch (error: any) {
    throw new Error(`delete Coupon ${error.message}`);
  }
}

export async function updateCoupon({ coupon, id, path }: any) {
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingCoupon = await Coupon.findById(id);

    if (!existingCoupon) {
      return new Response("Coupon not found", { status: 404 });
    }

    existingCoupon.title = coupon.title;
    existingCoupon.logo = coupon.logo;
    existingCoupon.couponCode = coupon.couponCode;
    existingCoupon.endTime = coupon.endTime;
    existingCoupon.discountPercentage = coupon.discountPercentage;

    await existingCoupon.save();
    revalidatePath(path);
    return existingCoupon;
  } catch (error: any) {
    throw new Error(`update Coupon ${error.message}`);
  }
}
