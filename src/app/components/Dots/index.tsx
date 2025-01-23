import React from "react";

const Dots = ({ activeIndex, totalDots }: { activeIndex: number; totalDots: number }) => {
  return (
    <div className="flex space-x-4 justify-center items-center mt-7">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: activeIndex === index ? "#3B82F6" : "#D1D5DB", 
            boxShadow:
              activeIndex === index
                ? "0 4px 6px rgba(59, 130, 246, 0.5)"
                : "none",
            transform: activeIndex === index ? "scale(1.1)" : "scale(1)", 
            transition: "all 0.3s ease",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
