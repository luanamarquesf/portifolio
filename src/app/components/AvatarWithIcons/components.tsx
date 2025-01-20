"use client";

import React from "react";
import localImage from "../../../../public/Luana Marques.png";
import Image from "next/image";

const AvatarWithShadow = () => {
    return (
        <div className="relative">
            <div className="absolute top-2 left-2 w-[400px] h-[400px] bg-black rounded-[8px] shadow-lg z-0"></div>
            <div className="relative z-10">
                <Image
                    src={localImage}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    className="rounded-[8px] z-10"
                />
            </div>
        </div>
    );
};

export default AvatarWithShadow;
