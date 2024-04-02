import React, { useEffect } from "react";
import Image from "next/image";
import { sceneProps } from "@/types";

const Navigation = ({
    setSceneOne,
    setSceneTwo,
    setSceneThree,
}: // setSceneFour,
sceneProps) => {
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
        <div className="nav-com">
            <div className="nav-btns">
                <button
                    className="nav-btn"
                    onClick={() => sceneHandler("sceneOne")}
                >
                    <Image src="/home.png" alt="home" width={25} height={25} />
                </button>
                <button
                    className="nav-btn"
                    onClick={() => sceneHandler("sceneTwo")}
                >
                    <Image src="/tool.png" alt="tools" width={25} height={25} />
                </button>
                <button
                    className="nav-btn"
                    onClick={() => sceneHandler("sceneThree")}
                >
                    <Image
                        src="/example.png"
                        alt="examples"
                        width={25}
                        height={25}
                    />
                </button>
                {/* <button
                    className="nav-btn"
                    onClick={() => sceneHandler("sceneFour")}
                >
                    <Image
                        src="/contact.png"
                        alt="contacts"
                        width={25}
                        height={25}
                    />
                </button> */}
            </div>
        </div>
    );
};

export default Navigation;
