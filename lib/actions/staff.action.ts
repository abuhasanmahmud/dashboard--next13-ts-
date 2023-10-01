"use server";

import { connectToDB } from "@/utils/database";

import { revalidatePath } from "next/cache";
import Staff from "../model/staff.model";

export async function addStaff({ staffData, path }: any) {
  // console.log("product data", productData);
  connectToDB();
  try {
    const createStaff = await Staff.create(staffData);
    revalidatePath(path);

    return createStaff;
  } catch (error: any) {
    throw new Error(`Error in add product ${error.message}`);
  }
}

export async function fetchAllStaff() {
  connectToDB();
  try {
    const allStaff = await Staff.find();
    //     console.log("allStaff", allStaff);
    return allStaff;
  } catch (error: any) {
    throw new Error(`fetching product ${error.message}`);
  }
}

export async function deleteStaff({ id, path }: any) {
  connectToDB();
  try {
    const deleteStaff = await Staff.findByIdAndRemove(id);
    revalidatePath(path);
    return deleteStaff;
  } catch (error: any) {
    throw new Error(`delete product ${error.message}`);
  }
}

export async function updateStaff({ staff, id, path }: any) {
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingStaff = await Staff.findById(id);

    if (!existingStaff) {
      return new Response("Staff not found", { status: 404 });
    }

    existingStaff.name = staff.name;
    existingStaff.email = staff.email;
    existingStaff.password = staff.password;
    existingStaff.contact = staff.contact;
    existingStaff.role = staff.role;
    existingStaff.img = staff.img;
    existingStaff.joiningDate = staff.joiningDate;

    await existingStaff.save();
    revalidatePath(path);
    return existingStaff;
  } catch (error: any) {
    throw new Error(`update staff ${error.message}`);
  }
}
