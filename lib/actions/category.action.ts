"use server";

import { connectToDB } from "@/utils/database";

import { revalidatePath } from "next/cache";
import Category from "../model/category.model";

export async function addCategory({ categoryData, path }: any) {
  // console.log("product data", productData);
  connectToDB();
  try {
    const createCategory = await Category.create(categoryData);
    revalidatePath(path);

    return createCategory;
  } catch (error: any) {
    throw new Error(`Error in add product ${error.message}`);
  }
}

export async function fetchAllCategory() {
  connectToDB();
  try {
    const allCategory = await Category.find();
    console.log("allProducts", allCategory);
    return allCategory;
  } catch (error: any) {
    throw new Error(`fetching product ${error.message}`);
  }
}

export async function deleteCategory({ id, path }: any) {
  connectToDB();
  try {
    const deleteCategory = await Category.findByIdAndRemove(id);
    revalidatePath(path);
    return deleteCategory;
  } catch (error: any) {
    throw new Error(`delete product ${error.message}`);
  }
}

export async function updateCategory({ category, id, path }: any) {
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingCategory = await Category.findById(id);

    if (!existingCategory) {
      return new Response("Category not found", { status: 404 });
    }

    existingCategory.title = category.title;
    existingCategory.des = category.des;
    existingCategory.icon = category.icon;
    existingCategory.status = category.status;
    existingCategory.type = category.type;

    await existingCategory.save();
    revalidatePath(path);
    return existingCategory;
  } catch (error: any) {
    throw new Error(`update product ${error.message}`);
  }
}
