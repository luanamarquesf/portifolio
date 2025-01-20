import React from "react";
import Button from "../Button";

const ProfileSection: React.FC = () => {
  const handleHireClick = () => {
    alert("Você clicou em 'Hire me'!");
  };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/files/Profile.pdf";  
    link.download = "Profile.pdf";  
    link.click();  
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-left">
        Hello, <br /> I&apos;m Luana
      </h1>

      <p className="text-xl text-gray-800 mt-4 text-left">
        As a Senior Front-End Developer, I have experience with the following tools:
      </p>

      <p className="text-lg text-gray-800 mt-4 text-left">
        React, JavaScript (ES6+), TypeScript, CSS / SASS / TailwindCSS, Webpack & Babel, Git & GitHub, Node.js, Testing Frameworks (Jest, React Testing Library)
      </p>

      <div className="flex gap-6 mt-6">
        <Button
          text="Hire me"
          onClick={handleHireClick}
          className="bg-black text-white shadow-[4px_4px_8px_0px_rgba(56,182,255,1)]"
        />
        <Button
          text="Download CV"
          onClick={handleDownloadClick}
          className="bg-black text-white shadow-[4px_4px_8px_0px_rgba(56,182,255,1)]"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
