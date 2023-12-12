/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const XSmallDataBox = ({ chartStyle, darkMode, color, className }) => {
  return (
    <div
      className={`left-[20px] flex-col items-start gap-[15px] p-[24px] rounded-[8px] relative ${
        chartStyle === "tiny-bar-chart" ||
        (chartStyle === "tiny-line-chart" && color === "purple") ||
        (chartStyle === "tiny-line-chart" && color === "red") ||
        (chartStyle === "tiny-line-chart" && color === "yellow" && !darkMode) ||
        color === "purple-green" ||
        color === "red-green" ||
        color === "yellow-neutral"
          ? "w-[400px]"
          : ""
      } ${
        chartStyle === "tiny-bar-chart" ||
        (chartStyle === "tiny-line-chart" && color === "purple") ||
        (chartStyle === "tiny-line-chart" && color === "red") ||
        (chartStyle === "tiny-line-chart" && color === "yellow" && !darkMode) ||
        color === "purple-green" ||
        color === "red-green" ||
        color === "yellow-neutral"
          ? "flex"
          : color === "yellow" && darkMode && chartStyle === "tiny-line-chart"
          ? "inline-flex"
          : ""
      } ${
        !darkMode && color === "purple" && chartStyle === "tiny-bar-chart"
          ? "top-[20px]"
          : !darkMode && color === "yellow" && chartStyle === "tiny-bar-chart"
          ? "top-[269px]"
          : !darkMode && color === "red" && chartStyle === "tiny-bar-chart"
          ? "top-[518px]"
          : !darkMode && color === "purple" && chartStyle === "tiny-line-chart"
          ? "top-[767px]"
          : !darkMode && color === "yellow" && chartStyle === "tiny-line-chart"
          ? "top-[1016px]"
          : !darkMode && chartStyle === "tiny-line-chart" && color === "red"
          ? "top-[1265px]"
          : color === "purple-green" && !darkMode
          ? "top-[1514px]"
          : !darkMode && color === "red-green"
          ? "top-[1763px]"
          : !darkMode && color === "yellow-neutral"
          ? "top-[2012px]"
          : darkMode && color === "purple" && chartStyle === "tiny-bar-chart"
          ? "top-[2261px]"
          : darkMode && color === "yellow" && chartStyle === "tiny-bar-chart"
          ? "top-[2510px]"
          : darkMode && color === "red" && chartStyle === "tiny-bar-chart"
          ? "top-[2759px]"
          : darkMode && color === "purple" && chartStyle === "tiny-line-chart"
          ? "top-[3008px]"
          : color === "yellow" && darkMode && chartStyle === "tiny-line-chart"
          ? "top-[3257px]"
          : chartStyle === "tiny-line-chart" && darkMode && color === "red"
          ? "top-[3506px]"
          : color === "purple-green" && darkMode
          ? "top-[3755px]"
          : darkMode && color === "red-green"
          ? "top-[4004px]"
          : darkMode && color === "yellow-neutral"
          ? "top-[4253px]"
          : ""
      } ${
        (chartStyle === "tiny-bar-chart" && color === "red" && !darkMode) ||
        (chartStyle === "tiny-bar-chart" && color === "yellow" && !darkMode) ||
        (chartStyle === "tiny-bar-chart" && darkMode) ||
        chartStyle === "tiny-line-chart" ||
        color === "purple-green" ||
        color === "red-green" ||
        color === "yellow-neutral"
          ? "h-[225px]"
          : ""
      } ${darkMode ? "bg-backgroundsdark-cards" : "bg-white"} ${className}`}
    >
      <div
        className={`font-chart-titles-chart-title-m self-stretch mt-[-1.00px] tracking-[var(--chart-titles-chart-title-m-letter-spacing)] text-[length:var(--chart-titles-chart-title-m-font-size)] [font-style:var(--chart-titles-chart-title-m-font-style)] font-[number:var(--chart-titles-chart-title-m-font-weight)] leading-[var(--chart-titles-chart-title-m-line-height)] relative ${
          darkMode ? "text-gray" : "text-black"
        }`}
      >
        Chart Title
      </div>
      {((chartStyle === "tiny-line-chart" && color === "yellow") ||
        (color === "purple-green" && !darkMode) ||
        color === "purple" ||
        (color === "red-green" && !darkMode) ||
        color === "red" ||
        (color === "yellow-neutral" && !darkMode)) && (
        <img
          className="w-[352px] h-[140px] relative"
          alt="Tinybarchart"
          src={
            color === "purple" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-4@2x.png"
              : !darkMode && color === "red" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-3@2x.png"
              : color === "purple" && chartStyle === "tiny-line-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis--show-5@2x.png"
              : !darkMode && color === "yellow"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis--show-4@2x.png"
              : chartStyle === "tiny-line-chart" && color === "red"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis--show-3@2x.png"
              : color === "purple-green"
              ? "https://c.animaapp.com/nHaPlpU6/img/simplelinechart---showcartesiangrid---showxaxis---showyaxis--sho-2@2x.png"
              : color === "red-green"
              ? "https://c.animaapp.com/nHaPlpU6/img/simplelinechart---showcartesiangrid---showxaxis---showyaxis--sho-1@2x.png"
              : color === "yellow-neutral"
              ? "https://c.animaapp.com/nHaPlpU6/img/simplelinechart---showcartesiangrid---showxaxis---showyaxis--sho@2x.png"
              : darkMode && color === "red" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-1@2x.png"
              : color === "yellow" && darkMode
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis--show-1@2x.png"
              : undefined
          }
        />
      )}

      {((chartStyle === "tiny-bar-chart" && color === "yellow") ||
        (color === "purple-green" && darkMode) ||
        (color === "red-green" && darkMode) ||
        (color === "yellow-neutral" && darkMode)) && (
        <div className="w-[352px] h-[140px] relative">
          <div className="h-[140px] relative">
            <div className="w-[352px] left-0 flex flex-col items-start top-0 gap-[10px] p-[12px] h-[39px] overflow-hidden absolute">
              <div className="w-full flex self-stretch flex-col items-start opacity-40 gap-[10px] h-[28px] mb-[-12.00px] relative">
                <div className="[font-family:'Mulish',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[10px] text-[#3b3b3b] relative font-semibold leading-[normal]">
                  Preview in Anima
                </div>
              </div>
            </div>
            <img
              className={`absolute ${
                color === "yellow" ? "w-[339px]" : chartStyle === "line-chart" ? "w-[352px]" : ""
              } ${color === "yellow" ? "left-[6px]" : chartStyle === "line-chart" ? "left-0" : ""} ${
                color === "yellow" ? "top-[35px]" : chartStyle === "line-chart" ? "top-0" : ""
              } ${color === "yellow" ? "h-[105px]" : chartStyle === "line-chart" ? "h-[140px]" : ""}`}
              alt="Group"
              src={
                !darkMode
                  ? "https://c.animaapp.com/nHaPlpU6/img/group-14@2x.png"
                  : darkMode && color === "yellow"
                  ? "https://c.animaapp.com/nHaPlpU6/img/group-13@2x.png"
                  : chartStyle === "line-chart"
                  ? "https://c.animaapp.com/nHaPlpU6/img/group-12@2x.png"
                  : undefined
              }
            />
            {chartStyle === "line-chart" && (
              <>
                <img
                  className={`w-[352px] left-0 absolute ${
                    color === "red-green" ? "top-[29px]" : color === "yellow-neutral" ? "top-0" : "top-[34px]"
                  } ${color === "red-green" ? "h-[111px]" : color === "yellow-neutral" ? "h-[140px]" : "h-[106px]"}`}
                  alt="Group"
                  src={
                    color === "red-green"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-8@2x.png"
                      : color === "yellow-neutral"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-5@2x.png"
                      : "https://c.animaapp.com/nHaPlpU6/img/group-11@2x.png"
                  }
                />
                <img
                  className={`w-[352px] left-0 absolute ${color === "red-green" ? "top-[45px]" : "top-[28px]"} ${
                    color === "red-green" ? "h-[71px]" : color === "yellow-neutral" ? "h-[87px]" : "h-[81px]"
                  }`}
                  alt="Group"
                  src={
                    color === "red-green"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-7@2x.png"
                      : color === "yellow-neutral"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-4@2x.png"
                      : "https://c.animaapp.com/nHaPlpU6/img/group-10@2x.png"
                  }
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
