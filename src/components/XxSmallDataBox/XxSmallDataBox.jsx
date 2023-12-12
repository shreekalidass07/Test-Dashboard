/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const XxSmallDataBox = ({ chartStyle, darkMode, color, className, chartTitleClassName }) => {
  return (
    <div
      className={`w-[360px] flex items-center gap-[8px] p-[24px] rounded-[8px] justify-center relative ${
        color === "red" || color === "yellow" || (chartStyle === "tiny-bar-chart" && color === "green")
          ? "left-[20px]"
          : ""
      } ${
        !darkMode && color === "yellow" && chartStyle === "tiny-line-chart"
          ? "top-[190px]"
          : !darkMode && chartStyle === "tiny-line-chart" && color === "red"
          ? "top-[360px]"
          : !darkMode && color === "green" && chartStyle === "tiny-bar-chart"
          ? "top-[530px]"
          : !darkMode && color === "red" && chartStyle === "tiny-bar-chart"
          ? "top-[700px]"
          : !darkMode && color === "yellow" && chartStyle === "tiny-bar-chart"
          ? "top-[870px]"
          : color === "green" && darkMode && chartStyle === "tiny-line-chart"
          ? "top-[1040px]"
          : color === "yellow" && darkMode && chartStyle === "tiny-line-chart"
          ? "top-[1210px]"
          : chartStyle === "tiny-line-chart" && darkMode && color === "red"
          ? "top-[1380px]"
          : color === "green" && darkMode && chartStyle === "tiny-bar-chart"
          ? "top-[1550px]"
          : darkMode && color === "red" && chartStyle === "tiny-bar-chart"
          ? "top-[1720px]"
          : darkMode && color === "yellow" && chartStyle === "tiny-bar-chart"
          ? "top-[1890px]"
          : "top-[20px]"
      } ${darkMode ? "bg-backgroundsdark-cards" : "bg-[#ffffff]"} ${className}`}
    >
      <div className="flex flex-col items-start grow gap-[18px] flex-1 h-[98px] relative">
        <div className={`w-[156px] h-[48px] relative ${chartTitleClassName}`}>
          <div
            className={`font-chart-titles-chart-title-s w-[152px] left-0 tracking-[var(--chart-titles-chart-title-s-letter-spacing)] [font-style:var(--chart-titles-chart-title-s-font-style)] text-[length:var(--chart-titles-chart-title-s-font-size)] top-0 font-[number:var(--chart-titles-chart-title-s-font-weight)] leading-[var(--chart-titles-chart-title-s-line-height)] absolute ${
              !darkMode ? "opacity-70" : ""
            } ${!darkMode ? "text-black" : "text-gray"}`}
          >
            CHART TITLE
          </div>
          <div
            className={`[font-family:'Mulish',Helvetica] w-[152px] left-0 tracking-[0] text-[24px] top-[26px] font-bold leading-[22px] absolute ${
              !darkMode ? "text-black" : "text-gray"
            }`}
          >
            2,643
          </div>
        </div>
        <div className="w-[152px] flex items-center gap-[8px] flex-[0_0_auto] relative">
          <img
            className="w-[14.7px] h-[14.7px] relative"
            alt="Arrow upward"
            src={
              !darkMode
                ? "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-15@2x.png"
                : "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-9@2x.png"
            }
          />
          <div
            className={`font-text-small-text w-[140px] mt-[-1.00px] tracking-[var(--text-small-text-letter-spacing)] text-[length:var(--text-small-text-font-size)] [font-style:var(--text-small-text-font-style)] mr-[-10.70px] font-[number:var(--text-small-text-font-weight)] leading-[var(--text-small-text-line-height)] relative ${
              !darkMode ? "text-black" : "text-gray"
            }`}
          >
            1.10% Since yesterday
          </div>
        </div>
      </div>
      {((chartStyle === "tiny-bar-chart" && color === "green") ||
        (chartStyle === "tiny-bar-chart" && color === "red") ||
        (chartStyle === "tiny-bar-chart" && color === "yellow" && !darkMode) ||
        chartStyle === "tiny-line-chart") && (
        <img
          className="w-[140px] h-[98px] relative"
          alt="Tinylinechart"
          src={
            color === "green" && chartStyle === "tiny-line-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis---sho-8@2x.png"
              : chartStyle === "tiny-line-chart" && color === "red"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis---sho-6@2x.png"
              : color === "green" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-9@2x.png"
              : color === "red" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-8@2x.png"
              : color === "yellow" && chartStyle === "tiny-bar-chart"
              ? "https://c.animaapp.com/nHaPlpU6/img/tinybarchart----showcartesiangrid---showxaxis---showyaxis--showt-7@2x.png"
              : color === "yellow" && darkMode
              ? "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis---sho-4@2x.png"
              : "https://c.animaapp.com/nHaPlpU6/img/tinylinechart----showcartesiangrid---showxaxis---showyaxis---sho-7@2x.png"
          }
        />
      )}

      {darkMode && color === "yellow" && chartStyle === "tiny-bar-chart" && (
        <div className="relative w-[140px] h-[98px]">
          <div className="relative h-[98px]">
            <div className="flex flex-col w-[140px] h-[39px] items-start gap-[10px] p-[12px] absolute top-0 left-0 overflow-hidden">
              <div className="flex flex-col h-[28px] items-start gap-[10px] relative self-stretch w-full mb-[-12.00px] opacity-40">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#3b3b3b] text-[10px] tracking-[0] leading-[normal]">
                  Preview in Anima
                </div>
              </div>
            </div>
            <img
              className="absolute w-[111px] h-[92px] top-[6px] left-[26px]"
              alt="Group"
              src="https://c.animaapp.com/nHaPlpU6/img/group-15@2x.png"
            />
          </div>
        </div>
      )}
    </div>
  );
};
