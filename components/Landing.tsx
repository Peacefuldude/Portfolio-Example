import React from "react";
import { cn } from "@/utils/tailwind-utils";
import { sceneProps } from "@/types";
import Header from "./Header";
import { useEffect, useState } from "react";

const Landing = ({
    setSceneOne,
    setSceneTwo,
    setSceneThree,
}: // setSceneFour,
sceneProps) => {
    const [showHero, setShowHero] = useState(false);

    useEffect(() => {
        setShowHero(true);
    }, []);

    const sceneHandler = (item: string) => {
        if (item === "sceneOne") {
            setSceneOne(true);
            setSceneTwo(false);
            setSceneThree(false);
            // setSceneFour(false);
        } else if (item === "sceneTwo") {
            setSceneOne(false);
            setSceneTwo(true);
            setSceneThree(false);
            // setSceneFour(false);
        } else if (item === "sceneThree") {
            setSceneOne(false);
            setSceneTwo(false);
            setSceneThree(true);
            // setSceneFour(false);
        } else if (item === "sceneFour") {
            setSceneOne(false);
            setSceneTwo(false);
            setSceneThree(false);
            // setSceneFour(true);
        }
    };

    return (
        <div className="landing-com">
            <div
                className={cn(
                    "hero-div",
                    showHero ? "opacity-100" : "opacity-0"
                )}
            >
                <h1 className="hero-h1">
                    Every Idea To Reality By{" "}
                    <span className="hero-span">Web Development</span>
                </h1>
                <h3 className="hero-h3">
                    I am a front-end developer with a background in law studies.
                    Yea i studied law in university but returned as a
                    programmer. ReactJs, NextJs, Js and Ts along side Tailwind
                    here.
                </h3>
                <div className="hero-btns">
                    <button
                        className="hero-btn-active"
                        onClick={() => sceneHandler("sceneOne")}
                    >
                        Start
                    </button>
                    <button
                        className="hero-btn"
                        onClick={() => sceneHandler("sceneTwo")}
                    >
                        Tools
                    </button>
                    <button
                        className="hero-btn"
                        onClick={() => sceneHandler("sceneThree")}
                    >
                        Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
