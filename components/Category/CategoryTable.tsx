"use client";

import { RiDeleteBin5Fill } from "react-icons/ri";

import { useEffect, useState } from "react";
import CategoryDrawer from "../drawer/CategoryDrawer";
import { deleteProduct, fetchAllProduct } from "@/lib/actions/product.action";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";

const CategoryTable = ({ categorys }: any) => {
  const [isOpenCategoryDrawer, setIsOpenCategoryDrawer] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [categoryId, setCategoryId] = useState("");

  console.log("categoryDetails", categoryDetails);
  const { isDeleteModal, setIsDeleteModal } = useMyContext();

  console.log("delete modal", isDeleteModal);

  const handelCategoryUpdate = (item: any) => {
    setCategoryDetails(item);
    setIsOpenCategoryDrawer(true);
  };

  const path = usePathname();
  // console.log("path", path);

  return (
    <>
      <CategoryDrawer
        isOpenCategoryDrawer={isOpenCategoryDrawer}
        setIsOpenCategoryDrawer={setIsOpenCategoryDrawer}
        categoryDetails={categoryDetails}
      />
      <DeleteModal2 categoryId={categoryId} />
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-bold leading-6 text-gray-900">Category</h1>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={(e) => {
                setIsOpenCategoryDrawer(true), setCategoryDetails({});
              }}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Category
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Icon
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Published
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categorys?.map((item: any) => (
                    <tr key={item._id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.id}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <img src={item.icon} style={{ width: "30px", height: "20" }} alt="Product img" />
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.des}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.type}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.status}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4  flex justify-center  items-center gap-2 text-sm font-medium sm:pr-0">
                        <a
                          onClick={() => handelCategoryUpdate(item)}
                          className="text-indigo-600 hover:text-indigo-900 cursor-pointer "
                        >
                          Edit<span className="sr-only"> {item.name}</span>
                        </a>

                        <a
                          onClick={() => {
                            setIsDeleteModal(true), setCategoryId(item._id.toString());
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <RiDeleteBin5Fill className=" cursor-pointer " />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
