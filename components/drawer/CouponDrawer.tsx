"use client";

import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { addCoupon, updateCoupon } from "@/lib/actions/coupon.action";
import { usePathname } from "next/navigation";

const CouponDrawer = ({ isOpenCouponDrawer, setIsOpenCouponDrawer, couponDetails }: any) => {
  // console.log("couponDetails", couponDetails);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("title", couponDetails.title);
    setValue("couponCode", couponDetails.couponCode);
    setValue("endTime", couponDetails.endTime);
    setValue("status", couponDetails.status);
    setValue("discountPercentage", couponDetails.discountPercentage);
  }, [couponDetails]);

  const [submitting, setSubmitting] = useState(false);
  const path = usePathname();

  const handelCouponAdd = async (data: any) => {
    setSubmitting(true);
    const couponData = {
      title: data.title,
      couponCode: data.couponCode,
      endTime: data.endTime,
      discountPercentage: data.discountPercentage,
    };

    const res = await addCoupon({ couponData, path });
    if (res._id) {
      setSubmitting(false);
      reset();
      setIsOpenCouponDrawer(false);
      toast.success(`${res.title} successfully added`);
    } else {
      setSubmitting(false);
      alert("there is an error");
    }
  };

  const handelCouponUpdate = async (data: any) => {
    setSubmitting(true);
    const couponData = {
      title: data.title,
      couponCode: data.couponCode,
      endTime: data.endTime,
      discountPercentage: data.discountPercentage,
    };
    const res = await updateCoupon({ coupon: couponData, path, id: couponDetails?._id });
    // console.log("click", res);
    if (res._id) {
      setSubmitting(false);
      setIsOpenCouponDrawer(false);
      toast.success(`${res?.title} update successfully`);
    } else {
      setSubmitting(false);
    }
  };

  return (
    <Transition.Root show={isOpenCouponDrawer} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={setIsOpenCouponDrawer}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <form
                    onSubmit={handleSubmit(!couponDetails._id ? handelCouponAdd : handelCouponUpdate)}
                    className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              {couponDetails.title
                                ? `Update Coupon (${couponDetails.title})`
                                : "Add Coupon"}
                            </Dialog.Title>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="relative text-gray-400 hover:text-gray-500"
                              onClick={() => setIsOpenCouponDrawer(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0  sm:py-0">
                        {/* Product Name */}
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              Coupon Name
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              // setValue={}
                              // defaultValue={couponDetails ? couponDetails?.title : ""}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                              {...register("title", { required: true })}
                            />
                            {errors.title?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Coupon title is required</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              Coupon Code
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              // setValue={}
                              // defaultValue={couponDetails ? couponDetails?.title : ""}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                              {...register("couponCode", { required: true })}
                            />
                            {errors.couponCode?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Coupon code is required</p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              Coupon Discount
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="Number"
                              // setValue={}
                              // defaultValue={couponDetails ? couponDetails?.title : ""}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                              {...register("discountPercentage", { required: true })}
                            />
                            {errors.discountPercentage?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Coupon discount is required</p>
                            )}
                          </div>
                        </div>
                        {/* <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              Coupon status
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              // setValue={}
                              // defaultValue={couponDetails ? couponDetails?.title : ""}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                              {...register("status", { required: true })}
                            />
                            {errors.type?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Coupon Status is required</p>
                            )}
                          </div>
                        </div> */}

                        {/* Project description */}
                        {/* <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              Description
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              // defaultValue={couponDetails?.des}
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              {...register("des", { required: true })}
                            />
                            {errors.des?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">
                                Product description is required
                              </p>
                            )}
                          </div>
                        </div> */}

                        {/* product img
                        <div className="mx-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Upload category icon
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="product-img"
                            type="file"
                          />
                        </div> */}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      {submitting && (
                        <>
                          <Bars
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        </>
                      )}
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setIsOpenCouponDrawer(false)}
                        >
                          Cancel
                        </button>
                        <button
                          disabled={submitting}
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {couponDetails?._id ? <span>Update</span> : <span>Create</span>}
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CouponDrawer;
