import React from "react";
import { cn } from "@/utils/tailwind-utils";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ExamplesData } from "@/constants/constants";
import { Autoplay } from "swiper/modules";
import ExampleCard from "./ExampleCard";

const Projects = () => {
    const [showHero, setShowHero] = useState(false);

    useEffect(() => {
        setShowHero(true);
    }, []);

    return (
        <div className="landing-com">
            <div
                className={cn(
                    "hero-div-Example",
                    showHero ? "opacity-100" : "opacity-0"
                )}
            >
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        // 500: {
                        //     slidesPerView: 6,
                        // },
                        480: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mt-14 max-w-[70rem] max-md:max-w-[70rem] max-sm:max-w-[70rem]"
                >
                    {ExamplesData.map((example, index) => (
                        <SwiperSlide key={index}>
                            <ExampleCard
                                name={example.name}
                                image={example.image}
                                des={example.des}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="examples-grid-div">
                    {ExamplesData.map((example, index) => (
                        <ExampleCard
                            key={index}
                            name={example.name}
                            image={example.image}
                            des={example.des}
                        />
                    ))}
                </div> */}
                <h3 className="hero-h3">Feel Free To Check Them</h3>
            </div>
        </div>
    );
};

export default Projects;
