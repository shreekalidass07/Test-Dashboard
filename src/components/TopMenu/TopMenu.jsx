/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { SearchField } from "../SearchField";
import { UserAvatar } from "../UserAvatar";

export const TopMenu = ({ searchBoxStyle, darkMode, className }) => {
  return (
    <div
      className={`w-[calc(100.00%_-_20px)] flex left-[20px] items-center px-[48px] py-[36px] h-[72px] justify-between relative ${
        searchBoxStyle === "fill-imground" && darkMode
          ? "top-[115px]"
          : !darkMode && searchBoxStyle === "rectangle-imgrect"
          ? "top-[211px]"
          : searchBoxStyle === "rectangle-imgrect" && darkMode
          ? "top-[307px]"
          : !darkMode && searchBoxStyle === "fill-letterrect"
          ? "top-[403px]"
          : searchBoxStyle === "fill-letterrect" && darkMode
          ? "top-[499px]"
          : !darkMode && searchBoxStyle === "stroke-lettercircl"
          ? "top-[595px]"
          : darkMode && searchBoxStyle === "stroke-lettercircl"
          ? "top-[691px]"
          : "top-[19px]"
      } ${
        !darkMode && ["fill-imground", "rectangle-imgrect"].includes(searchBoxStyle)
          ? "shadow-[0px_2px_2px_#a3abb942]"
          : searchBoxStyle === "fill-letterrect"
          ? "shadow-[0px_1px_0px_#3b3b3b42]"
          : ""
      } ${darkMode ? "bg-backgroundsdark-mode" : "bg-[#ffffff]"} ${className}`}
    >
      <SearchField
        className={
          searchBoxStyle === "rectangle-imgrect" && darkMode
            ? "!mt-[-19.00px] !mb-[-19.00px]"
            : "!mt-[-18.00px] !mb-[-18.00px]"
        }
        darkMode={darkMode ? true : undefined}
        searchStyle={
          searchBoxStyle === "rectangle-imgrect"
            ? "underline"
            : searchBoxStyle === "stroke-lettercircl"
            ? "outlined"
            : "filled"
        }
      />
      <div className="inline-flex mt-[-20.00px] items-center gap-[22px] flex-[0_0_auto] justify-end mb-[-20.00px] relative">
        <div className="w-[16px] h-[16px] relative">
          <div className="left-px top-[-2px] h-[18px] relative">
            <img
              className="w-[14px] left-0 top-[2px] h-[16px] absolute"
              alt="Vector"
              src="https://c.animaapp.com/nHaPlpU6/img/vector-11@2x.png"
            />
            <div
              className={`left-[8px] top-0 bg-[#ce4848] absolute ${
                searchBoxStyle === "fill-letterrect" ? "border border-solid" : "border-[1.5px] border-solid"
              } ${
                searchBoxStyle === "stroke-lettercircl" ||
                (darkMode && searchBoxStyle === "fill-imground") ||
                (darkMode && searchBoxStyle === "rectangle-imgrect")
                  ? "border-backgroundsdark-mode"
                  : "border-[#ffffff]"
              } ${searchBoxStyle === "fill-letterrect" ? "w-[8px]" : "w-[9px]"} ${
                searchBoxStyle === "fill-letterrect" ? "h-[8px]" : "h-[9px]"
              } ${searchBoxStyle === "fill-letterrect" ? "rounded-[4px]" : "rounded-[4.5px]"}`}
            />
          </div>
        </div>
        <img
          className="w-px self-stretch relative"
          alt="Divider stroke"
          src="https://c.animaapp.com/nHaPlpU6/img/divider--stroke--8@2x.png"
        />
        <div
          className={`w-fit text-right whitespace-nowrap relative ${
            !darkMode && searchBoxStyle === "fill-imground"
              ? "[font-family:'Mulish',Helvetica]"
              : "font-text-medium-text"
          } ${
            !darkMode && searchBoxStyle === "fill-imground"
              ? "tracking-[0.20px]"
              : "tracking-[var(--text-medium-text-letter-spacing)]"
          } ${
            searchBoxStyle === "fill-letterrect" ||
            searchBoxStyle === "rectangle-imgrect" ||
            searchBoxStyle === "stroke-lettercircl" ||
            (darkMode && searchBoxStyle === "fill-imground")
              ? "[font-style:var(--text-medium-text-font-style)]"
              : ""
          } ${
            !darkMode && searchBoxStyle === "fill-imground"
              ? "text-[14px]"
              : "text-[length:var(--text-medium-text-font-size)]"
          } ${darkMode ? "text-[#ffffff]" : "text-grayscale-black"} ${
            !darkMode && searchBoxStyle === "fill-imground"
              ? "font-medium"
              : "font-[number:var(--text-medium-text-font-weight)]"
          } ${
            !darkMode && searchBoxStyle === "fill-imground"
              ? "leading-[20px]"
              : "leading-[var(--text-medium-text-line-height)]"
          }`}
        >
          {!darkMode && searchBoxStyle === "fill-imground" && <>Matt Appleyard</>}

          {((darkMode && searchBoxStyle === "fill-imground") ||
            (!darkMode && searchBoxStyle === "rectangle-imgrect")) && <>Samual Winston</>}

          {searchBoxStyle === "rectangle-imgrect" && darkMode && <>Alexandra Cohen</>}

          {searchBoxStyle === "fill-letterrect" && <>Jammy Winston</>}

          {searchBoxStyle === "stroke-lettercircl" && <>Kate Westrich</>}
        </div>
        <UserAvatar
          className="!left-[unset] !top-[unset]"
          shape={["fill-letterrect", "rectangle-imgrect"].includes(searchBoxStyle) ? "square" : "circle"}
          type={["fill-letterrect", "stroke-lettercircl"].includes(searchBoxStyle) ? "letter" : "image"}
        />
      </div>
    </div>
  );
};
