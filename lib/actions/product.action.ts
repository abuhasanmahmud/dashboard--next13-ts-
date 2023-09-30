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
    console.log("allProducts", allProducts);
    return allProducts;
  } catch (error: any) {
    throw new Error(`fetching product ${error.message}`);
  }
}

export async function deleteProduct({ id, path }: any) {
  connectToDB();
  try {
    const deleteProduct = await Product.findByIdAndRemove(id);
    revalidatePath(path);
    return deleteProduct;
  } catch (error: any) {
    throw new Error(`delete product ${error.message}`);
  }
}

export async function updateProduct({ product, id, path }: any) {
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingPrduct = await Product.findById(id);

    if (!existingPrduct) {
      return new Response("Product not found", { status: 404 });
    }

    existingPrduct.name = product.name;
    existingPrduct.price = product.price;
    existingPrduct.category = product.category;
    existingPrduct.des = product.des;

    await existingPrduct.save();
    revalidatePath(path);
    return existingPrduct;
  } catch (error: any) {
    throw new Error(`update product ${error.message}`);
  }
}
