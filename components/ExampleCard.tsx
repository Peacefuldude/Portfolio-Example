import { exampleCardProps } from "@/types";
import React from "react";
import Image from "next/image";

const ExampleCard = ({ name, image, des }: exampleCardProps) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-transparent backdrop-blur-3xl mx-4 bg-white bg-opacity-10">
            <Image
                src={image}
                alt={name}
                width={286}
                height={180}
                className="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
            />
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                    {name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
                    {des}
                </p>
            </div>
            <div className="example-btn-div">
                <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 w-full text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default ExampleCard;
