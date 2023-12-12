/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const SearchField = ({ searchStyle, darkMode, className }) => {
  return (
    <div
      className={`w-[261px] flex items-center gap-[9px] relative ${
        searchStyle === "outlined" ? "border border-solid" : ""
      } ${searchStyle === "outlined" ? "border-dark-gray" : ""} ${
        searchStyle === "underline" && !darkMode
          ? "shadow-[inset_0px_-1px_0px_#bbbbbb]"
          : searchStyle === "underline" && darkMode
          ? "shadow-[inset_0px_-1px_0px_#ffffff99]"
          : ""
      } ${searchStyle === "underline" ? "pl-[8px] pr-[18px] py-0" : "px-[18px] py-0"} ${
        searchStyle === "underline" && darkMode ? "h-[38px]" : "h-[36px]"
      } ${["filled", "outlined"].includes(searchStyle) ? "rounded-[54px]" : ""} ${
        searchStyle === "filled" && !darkMode
          ? "bg-gray"
          : searchStyle === "filled" && darkMode
          ? "bg-[#b5b7b91a]"
          : darkMode && ["outlined", "underline"].includes(searchStyle)
          ? "bg-backgroundsdark-mode"
          : searchStyle === "underline" && !darkMode
          ? "bg-[#ffffff]"
          : ""
      } ${className}`}
    >
      <img
        className="w-[16px] h-[16px] relative"
        alt="Google font icon"
        src="https://c.animaapp.com/nHaPlpU6/img/google-font-icon---filled--custom-14@2x.png"
      />
      <input
        className={`[font-style:var(--text-small-text-font-style)] flex-1 p-0 leading-[var(--text-small-text-line-height)] font-text-small-text relative grow font-[number:var(--text-small-text-font-weight)] text-[length:var(--text-small-text-font-size)] bg-transparent border-0 self-stretch tracking-[var(--text-small-text-letter-spacing)] opacity-40 ${
          searchStyle === "filled" && !darkMode ? "mt-[-0.90px]" : "mt-[-1.00px]"
        } ${darkMode ? "text-gray" : searchStyle === "outlined" && !darkMode ? "text-black" : "text-[#000000]"}`}
      />
    </div>
  );
};
