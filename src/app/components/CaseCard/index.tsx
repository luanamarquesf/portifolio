import { useState } from "react";
import Button from "../Button";
import { Label } from "./components";
import { CaseComponentProps } from "./types";

export const CaseCard = (props: CaseComponentProps) => {
  const MAX_LENGTH = 145;
  const renderComponent = (limitChar?: boolean) => {
    const useSubstring = props.description.length > MAX_LENGTH && limitChar;
    return (
      <>
        <div className="space-y-6 text-left">
          <Label {...props.label} />
          <h2 className={"text-1xl font-bold"}>{props.title}</h2>
          <p className={" text-gray-700 max-w-[20vw]"}>
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

          <Button
            {...props.cta}
            style={{ backgroundColor: props.label.color }}
          />
        </div>
        <img
          src={props.imageUrl}
          alt="Picture of the author"
          width={400}
          height={400}
          className="rounded-[8px] z-10"
        />
      </>
    );
  };
  return (
    <div className={" flex justify-center items-center space-x-6 mb-10"}>
      {renderComponent(props.limitChar)}
    </div>
  );
};
