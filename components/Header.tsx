import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="header-com">
            <p className="header-title">
                Peaceful <span className="title-span">Dev</span>
            </p>
            <div className="flex">
                <Image
                    src="/github.png"
                    alt="github"
                    width={33}
                    height={33}
                    className="header-images"
                />
                <Image
                    src="/telegram.png"
                    alt="telegram"
                    width={33}
                    height={33}
                    className="header-images"
                />
                <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width={33}
                    height={33}
                    className="header-images"
                />
            </div>
        </div>
    );
};

export default Header;
