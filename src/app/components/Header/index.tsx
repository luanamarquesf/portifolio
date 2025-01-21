"use client";
import React, { useState } from "react";
import CircleLogo from "../CircleLogo/indext";

interface HeaderProps {
  onMenuClick: (menuItem: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#000000] text-white py-4 px-6 rounded-b-[26px] shadow-lg">
      <nav className="flex justify-between items-center">
        <CircleLogo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          ☰
        </button>
        <ul
            className={`${
				isOpen ? "block" : "hidden"
			  } sm:flex sm:space-x-12 space-y-4 sm:space-y-0`}
        >
          <li>
            <button
              onClick={() => onMenuClick("Home")}
              className="hover:text-yellow-300 transition-colors"
            >
              <h1 className="text-2xl font-semibold">Home</h1>
            </button>
          </li>
          <li>
            <button
              onClick={() => onMenuClick("About")}
              className="hover:text-yellow-300 transition-colors"
            >
              <h1 className="text-2xl font-semibold">About</h1>
            </button>
          </li>
          <li>
            <button
              onClick={() => onMenuClick("Contact Us")}
              className="hover:text-yellow-300 transition-colors"
            >
              <h1 className="text-2xl font-semibold">Contact Us</h1>
            </button>
          </li>
          <li>
            <button
              onClick={() => onMenuClick("Team")}
              className="hover:text-yellow-300 transition-colors"
            >
              <h1 className="text-2xl font-semibold">Team</h1>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
