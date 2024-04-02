export interface sceneProps {
    sceneOne: boolean;
    setSceneOne: (sceneOne: boolean) => void;
    sceneTwo: boolean;
    setSceneTwo: (sceneTwo: boolean) => void;
    sceneThree: boolean;
    setSceneThree: (sceneThree: boolean) => void;
    // sceneFour: boolean;
    // setSceneFour: (sceneFour: boolean) => void;
}

export interface exampleCardProps {
    name: string;
    image: string;
    des: string;
}

export interface contactProps {
    isOpen: boolean;
    closeModel: () => void;
}
