import React from "react";
import { cn } from "@/utils/tailwind-utils";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { contactProps } from "@/types";

const Contact = ({ isOpen, closeModel }: contactProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModel}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {/* <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded bg-black text-white py-20 bg-opacity-70 shadow-xl transition-all flex flex-col gap-5">
                                    askfjlaskjfl
                                </Dialog.Panel> */}
                                <Dialog.Panel className="flex flex-col items-center justify-center dark">
                                    <div className="w-full max-w-md bg-transparent backdrop-blur-3xl rounded-lg shadow-md py-10 px-14 max-sm:px-6">
                                        <h2 className="text-xl font-bold text-gray-200 mb-6">
                                            I'll send you an email right away
                                        </h2>

                                        <form className="flex flex-col">
                                            <input
                                                placeholder="Name"
                                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                                type="name"
                                            />
                                            <input
                                                placeholder="Email"
                                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                                type="email"
                                            />
                                            <input
                                                placeholder="Description"
                                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                                type="description"
                                            />

                                            <button
                                                className="uppercase bg-gradient-to-r from-purple-600 to-pink-800 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 hover:to-pink-900 transition ease-in-out duration-150"
                                                type="submit"
                                            >
                                                Send
                                            </button>
                                        </form>

                                        <div className="flex justify-center mt-4">
                                            <a
                                                className="text-sm text-gray-400 hover:underline"
                                                href="#"
                                            >
                                                Privacy Policy
                                            </a>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Contact;
