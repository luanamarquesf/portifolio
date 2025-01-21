import React from "react";

const Dots = ({ activeIndex, totalDots }: { activeIndex: number; totalDots: number }) => {
    console.log(activeIndex)
  return (
    <div className="flex space-x-4 justify-center items-center mt-7">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: activeIndex === index ? "#3B82F6" : "#D1D5DB", // Azul para ativo, cinza para inativo
            boxShadow:
              activeIndex === index
                ? "0 4px 6px rgba(59, 130, 246, 0.5)"
                : "none", // Sombra apenas para ativo
            transform: activeIndex === index ? "scale(1.1)" : "scale(1)", // Escala maior para ativo
            transition: "all 0.3s ease", // Suaviza as mudanças
          }}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
