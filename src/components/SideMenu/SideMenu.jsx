/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { LogoPlaceholder } from "../LogoPlaceholder";

export const SideMenu = ({ darkMode, logo, className }) => {
  return (
    <div
      className={`left-[20px] flex-col items-center h-[472px] relative ${
        logo === "text" && darkMode ? "w-[200px]" : ""
      } ${logo === "text" && darkMode ? "flex" : "inline-flex"} ${
        darkMode ? "bg-backgroundsdark-mode" : "bg-[#ffffff]"
      } ${className}`}
    >
      <LogoPlaceholder
        className={
          darkMode
            ? "!self-stretch !h-[72px] !left-[unset] !bg-black !w-full !top-[unset]"
            : "!self-stretch !h-[72px] !left-[unset] !bg-gray !w-full !top-[unset]"
        }
        frame={
          !darkMode && logo === "image"
            ? "https://c.animaapp.com/nHaPlpU6/img/frame-1@2x.png"
            : darkMode && logo === "image"
            ? "https://c.animaapp.com/nHaPlpU6/img/frame-3@2x.png"
            : undefined
        }
        frameClassName={!darkMode && logo === "text" ? "!text-backgroundsdark-cards" : undefined}
        logoStyle={logo === "text" ? "text-logo" : "img-logo"}
      />
      <img
        className={`w-[200px] object-cover relative ${darkMode ? "h-[330px]" : "h-[352px]"}`}
        alt="Menu light"
        src={
          darkMode
            ? "https://c.animaapp.com/nHaPlpU6/img/menu---dark-1@2x.png"
            : "https://c.animaapp.com/nHaPlpU6/img/menu---light-2@2x.png"
        }
      />
    </div>
  );
};
