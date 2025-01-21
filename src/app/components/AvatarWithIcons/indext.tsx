"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AvatarWithShadow from "./components";


const AvatarWithIcons = () => {
    return (
        <div className="flex items-center space-x-6 mt-6">

            <AvatarWithShadow />
            <div className="flex flex-col items-center space-y-4">
            <a
                    href="https://www.instagram.com/luana_marquesf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[50px] lg:text-[70px] text-gray-700 hover:text-pink-500 transition-colors"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/luana-marques-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[50px] lg:text-[70px] text-gray-700 hover:text-blue-700 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:luana.ferreira223@gmail.com"
                    className="text-[50px] lg:text-[70px] text-gray-700 hover:text-red-500 transition-colors"
                >
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
};

export default AvatarWithIcons;
