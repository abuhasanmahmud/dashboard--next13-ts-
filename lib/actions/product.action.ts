"use server";

import { connectToDB } from "@/utils/database";
import Product from "../model/product.model";

export async function addProduct({ productData }: any) {
  connectToDB();
  try {
    const createProduct = await Product.create({ productData });
  } catch (error: any) {
    throw new Error(`Error in add product ${error.message}`);
  }
}
