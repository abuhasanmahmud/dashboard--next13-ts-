"use client";

import { RiDeleteBin5Fill } from "react-icons/ri";

import { useEffect, useState } from "react";
import { deleteProduct, fetchAllProduct } from "@/lib/actions/product.action";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import CouponDrawer from "../drawer/CouponDrawer";

const CouponTable = ({ coupons }: any) => {
  const [isOpenCouponDrawer, setIsOpenCouponDrawer] = useState(false);
  const [couponDetails, setCouponDetails] = useState({});
  const [couponId, setCouponId] = useState("");

  // console.log("product", products);
  const { isDeleteModal, setIsDeleteModal } = useMyContext();

  // console.log("delete modal", isDeleteModal);

  const handelCategoryUpdate = (item: any) => {
    setCouponDetails(item);
    setIsOpenCouponDrawer(true);
  };

  const path = usePathname();
  // console.log("path", path);

  return (
    <>
      <CouponDrawer
        isOpenCouponDrawer={isOpenCouponDrawer}
        setIsOpenCouponDrawer={setIsOpenCouponDrawer}
        couponDetails={couponDetails}
      />
      <DeleteModal2 couponId={couponId} />
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-bold leading-6 text-gray-900">Coupon</h1>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={(e) => {
                setIsOpenCouponDrawer(true), setCouponDetails({});
              }}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Coupon
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
                      Campaign Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Discount
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
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      End Date
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {coupons?.map((item: any) => (
                    <tr key={item._id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.couponCode}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.discountPercentage} %
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        publish toggle
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">start date</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">end date</td>
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
                            setIsDeleteModal(true), setCouponId(item._id.toString());
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

export default CouponTable;
