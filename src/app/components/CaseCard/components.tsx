import { LabelProps } from "./types";

export const Label = ({ text, color }: LabelProps) => {
  const hexToRgb = (hex: string): string => {
    let h = hex.replace("#", "");

    if (h.length === 3) {
      h = h
        .split("")
        .map((c) => c + c)
        .join("");
    }

    const r = parseInt(h.substr(0, 2), 16);
    const g = parseInt(h.substr(2, 2), 16);
    const b = parseInt(h.substr(4, 2), 16);

    return `${r}, ${g}, ${b}`;
  };
  const rgbColor = hexToRgb(color); 

  return (
    <div
      className="inline-block px-2 py-1 rounded-full"
      style={{
        backgroundColor: `rgba(${rgbColor}, 0.2)`, 
      }}
    >
      <p
        className="text-center font-semibold text-[13px]"
        style={{
          color: `rgba(${rgbColor}, 1)`, 
        }}
      >
        {text}
      </p>
    </div>
  );
};
