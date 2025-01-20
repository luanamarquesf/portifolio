
"use client";
import React from "react";
import CircleLogo from "../CircleLogo/indext";

interface HeaderProps {
	onMenuClick: (menuItem: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
	return (
		<header className="bg-[#000000] text-white py-4 px-6 rounded-b-[26px] shadow-lg">
			<nav className="flex justify-between items-center">
				<CircleLogo />
				<ul className="flex space-x-8">
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
