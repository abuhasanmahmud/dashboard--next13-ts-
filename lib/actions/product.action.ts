"use server";

import { connectToDB } from "@/utils/database";
import Product from "../model/product.model";
import { revalidatePath } from "next/cache";

export async function addProduct({ productData, path }: any) {
  // console.log("product data", productData);
  connectToDB();
  try {
    const createProduct = await Product.create(productData);
    revalidatePath(path);

    return createProduct;
  } catch (error: any) {
    throw new Error(`Error in add product ${error.message}`);
  }
}

export async function fetchAllProduct() {
  connectToDB();
  try {
    const allProducts = await Product.find();
    return allProducts;
  } catch (error: any) {
    throw new Error(`fetching product ${error.message}`);
  }
}
