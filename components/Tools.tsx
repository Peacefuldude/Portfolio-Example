import React from "react";
import { cn } from "@/utils/tailwind-utils";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ToolsData } from "@/constants/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Contact from "./Contact";

const Tools = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHero, setShowHero] = useState(false);

    useEffect(() => {
        setShowHero(true);
    }, []);

    return (
        <div className="landing-com">
            <div
                className={cn(
                    "hero-div-Tools",
                    showHero ? "opacity-100" : "opacity-0"
                )}
            >
                <h1 className="hero-h1">
                    Next<span className="hero-span">JS</span>
                </h1>
                <h3 className="hero-h3">
                    First you'll encounter HTML and CSS. Time passes and you
                    find yourself deep into JavaScript. That is when you start
                    to think about React and boom! You're writing in TS using
                    Next. The journey is that fast that theres's no way you
                    could notice it happening. knowing that you came a long way
                    and become a programmer, you know your path is paved.
                </h3>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 6,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mt-14 max-w-[40rem] max-md:max-w-[30rem] max-sm:max-w-[20rem]"
                >
                    {ToolsData.map((tool, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={tool.image}
                                alt={tool.name}
                                width={tool.width}
                                height={tool.height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={() => setIsOpen(true)}
                    className="mt-6 select-none rounded-lg bg-blue-500 py-3 px-6 w-full text-center align-middle font-sans text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Contact Me
                </button>
            </div>
            <Contact isOpen={isOpen} closeModel={() => setIsOpen(false)} />
        </div>
    );
};

export default Tools;
