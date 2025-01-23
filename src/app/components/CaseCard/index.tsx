import { useState } from "react";
import Button from "../Button";
import { Label } from "./components";
import { CaseComponentProps } from "./types";

export const CaseCard = (props: CaseComponentProps) => {
  const MAX_LENGTH = 145;
  const useSubstring = props.description.length > MAX_LENGTH && props.limitChar;

  return (
    <div
      className={`lg:flex items-center justify-center ${
        props.revertFlex ? "flex-row-reverse" : "flex-row"
      }
      gap-x-10`}
    >
      <div className="space-y-6 text-left">
        <Label {...props.label} />
        <h2 className={"text-1xl font-bold"}>{props.title}</h2>
        <p className={" text-gray-700 lg:max-w-[20vw]"}>
          {useSubstring
            ? `${props.description.substring(0, MAX_LENGTH)}... `
            : props.description}
          {useSubstring && (
            <button
              onClick={() => props.toggleModal(true)}
              className="text-gray-500 hover:underline font-small"
            >
              See more
            </button>
          )}
        </p>

        <Button {...props.cta}  style={{ backgroundColor: props.label.color }} />
      </div>
      <img
        src={props.imageUrl}
        alt="Picture of the author"
        width={400}
        height={400}
        className="mt-3 lg:mt-0 rounded-[8px] z-10"
      />
    </div>
  );
};
