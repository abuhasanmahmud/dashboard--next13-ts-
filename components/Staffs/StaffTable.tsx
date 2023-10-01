"use client";

import { RiDeleteBin5Fill } from "react-icons/ri";

import { useEffect, useState } from "react";
import { deleteProduct, fetchAllProduct } from "@/lib/actions/product.action";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import StaffDrawer from "../drawer/StaffDrawer";

const StaffTable = ({ staffs }: any) => {
  const [isOpenStaffDrawer, setIsOpenStaffDrawer] = useState(false);
  const [staffDetails, setStaffDetails] = useState({});
  const [staffId, setStaffId] = useState("");

  // console.log("product", products);
  const { isDeleteModal, setIsDeleteModal } = useMyContext();

  // console.log("delete modal", isDeleteModal);

  const handelCategoryUpdate = (item: any) => {
    setStaffDetails(item);
    setIsOpenStaffDrawer(true);
  };

  const path = usePathname();
  // console.log("path", path);

  return (
    <>
      <StaffDrawer
        isOpenStaffDrawer={isOpenStaffDrawer}
        setIsOpenStaffDrawer={setIsOpenStaffDrawer}
        staffDetails={staffDetails}
      />
      <DeleteModal2 staffId={staffId} />
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-bold leading-6 text-gray-900">Staff</h1>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={(e) => {
                setIsOpenStaffDrawer(true), setStaffDetails({});
              }}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Staff
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
                      Staff Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Contact
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Joining Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
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
                  {staffs?.map((item: any) => (
                    <tr key={item._id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.contact}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Joinning date
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.role}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.status}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        publish toggle
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
                            setIsDeleteModal(true), setStaffId(item._id.toString());
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

export default StaffTable;
