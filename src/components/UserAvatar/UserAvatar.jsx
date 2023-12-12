/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const UserAvatar = ({ shape, type, className }) => {
  return (
    <div
      className={`w-[40px] left-[20px] bg-cover h-[40px] bg-[50%_50%] relative ${
        type === "image" && shape === "square"
          ? "top-[84px]"
          : type === "letter" && shape === "square"
          ? "top-[148px]"
          : shape === "circle" && type === "letter"
          ? "top-[212px]"
          : "top-[20px]"
      } ${
        type === "image" && shape === "square"
          ? "bg-[url(https://c.animaapp.com/nHaPlpU6/img/avatar---square-5@2x.png)]"
          : type === "letter" && shape === "square"
          ? "bg-[url(https://c.animaapp.com/nHaPlpU6/img/avatar---square-3@2x.png)]"
          : shape === "circle" && type === "letter"
          ? "bg-[url(https://c.animaapp.com/nHaPlpU6/img/avatar---circle-4@2x.png)]"
          : "bg-[url(https://c.animaapp.com/nHaPlpU6/img/avatar---circle-6@2x.png)]"
      } ${className}`}
    />
  );
};
