import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { addProduct } from "@/lib/actions/product.action";

const ProductDrawer = ({ productDrawer, setProductDrawer }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handelProduct = async (data: any) => {
    console.log("data in product", data);
    await addProduct({ data });
  };

  return (
    <Transition.Root show={productDrawer} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={setProductDrawer}>
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
                    onSubmit={handleSubmit(handelProduct)}
                    className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              Add Product
                            </Dialog.Title>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="relative text-gray-400 hover:text-gray-500"
                              onClick={() => setProductDrawer(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        {/* Product Name */}
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlfor="project-name"
                              className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Product Name
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              // setValue={}
                              // defaultValue={productDetails ? productDetails?.name : ""}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                              {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Product name is required</p>
                            )}
                          </div>
                        </div>

                        {/* Project Category */}

                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlfor="project-Category"
                              className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Product Category
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              // defaultValue={productDetails?.category}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              {...register("category", { required: true })}
                            />
                            {errors.category?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Product category is required</p>
                            )}
                          </div>
                        </div>

                        {/* product price */}
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlfor="project-Category"
                              className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Price
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="number"
                              // defaultValue={productDetails?.price}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              {...register("price", { required: true })}
                            />
                            {errors.price?.type === "required" && (
                              <p className="text-red-400 font-bold mt-1">Product price is required</p>
                            )}
                          </div>
                        </div>

                        {/* Project description */}
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlfor="project-description"
                              className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Description
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              // defaultValue={productDetails?.des}
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
                        </div>

                        {/* product img */}
                        <div>
                          <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="product-img"
                          >
                            Upload product image
                          </label>
                          <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="product-img"
                            type="file"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      {/* {submitting && (
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
                      )} */}
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setProductDrawer(false)}
                        >
                          Cancel
                        </button>
                        <button
                          //       disabled={submitting}
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {/* {productDetails?._id ? <span>Update</span> : <span>Create</span>} */}
                          create
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

export default ProductDrawer;
