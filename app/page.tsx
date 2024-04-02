"use client";
import { useEffect, useState } from "react";
import { cn } from "@/utils/tailwind-utils";
import Landing from "@/components/Landing";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";

export default function Home() {
    const [sceneOne, setSceneOne] = useState(true);
    const [sceneTwo, setSceneTwo] = useState(false);
    const [sceneThree, setSceneThree] = useState(false);
    // const [sceneFour, setSceneFour] = useState(false);
    const [showBlured, setShowBlured] = useState(false);

    useEffect(() => {
        setShowBlured(true);
    }, []);

    return (
        <main className="w-full inset-0 overflow-hidden">
            {/* Background video */}
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-auto min-w-full min-h-full max-w-none"
                >
                    <source src="./background-wide.mp4" type="video/mp4" />
                    Your browser does not support the background or you have
                    connection problem.
                </video>
            </div>
            {/* Blured layer */}
            <div
                className={cn(
                    "bg-transparent backdrop-blur-md absolute top-0 w-full h-full transition-opacity duration-[6s]",
                    showBlured ? "opacity-100" : "opacity-0"
                )}
            ></div>
            {/* Darkened layer */}
            <div
                className={cn(
                    "bg-black fixed inset-0 transition-opacity duration-[4s]",
                    !showBlured ? "opacity-0" : "opacity-30"
                )}
            />
            {/* Changeable area */}
            <div className="absolute top-0 w-full h-full">
                <Header />
            </div>
            {sceneOne && (
                <div className="absolute top-0 w-full h-full">
                    <Landing
                        sceneOne={sceneOne}
                        setSceneOne={setSceneOne}
                        sceneTwo={sceneTwo}
                        setSceneTwo={setSceneTwo}
                        sceneThree={sceneThree}
                        setSceneThree={setSceneThree}
                        // sceneFour={sceneFour}
                        // setSceneFour={setSceneFour}
                    />
                </div>
            )}
            {sceneTwo && (
                <div className="absolute top-0 w-full h-full">
                    <Tools />
                </div>
            )}
            {sceneThree && (
                <div className="absolute top-0 w-full h-full">
                    <Projects />
                </div>
            )}
            {/* Navigation area */}
            <div className="absolute bottom-0 w-full">
                <Navigation
                    sceneOne={sceneOne}
                    setSceneOne={setSceneOne}
                    sceneTwo={sceneTwo}
                    setSceneTwo={setSceneTwo}
                    sceneThree={sceneThree}
                    setSceneThree={setSceneThree}
                    // sceneFour={sceneFour}
                    // setSceneFour={setSceneFour}
                />
            </div>
        </main>
    );
}
