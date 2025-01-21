import React, { CSSProperties } from "react";

interface ButtonProps {
  text: string; 
  onClick: () => void; 
  className?: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ style, text, onClick, className }) => {
  return (
    <div className="relative">

    <button
      onClick={onClick}
      style={style}
      className={`z-10 px-6 py-3 font-semibold text-lg rounded-md ${className} hover:bg-opacity-80 focus:outline-none transition duration-300 shadow-md`}
      >
      {text}
    </button>
    </div>

  );
};

export default Button;
