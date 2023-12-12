/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChartStyleBarchart = ({ className }) => {
  return (
    <div
      className={`flex flex-col w-[694px] h-[358px] items-center gap-[20px] p-[24px] relative top-[20px] left-[20px] bg-white rounded-[8px] ${className}`}
    >
      <div className="relative self-stretch mt-[-1.00px] font-chart-titles-chart-title-m font-[number:var(--chart-titles-chart-title-m-font-weight)] text-black text-[length:var(--chart-titles-chart-title-m-font-size)] tracking-[var(--chart-titles-chart-title-m-letter-spacing)] leading-[var(--chart-titles-chart-title-m-line-height)] [font-style:var(--chart-titles-chart-title-m-font-style)]">
        Chart Title
      </div>
      <div className="relative w-[646px] h-[268px]">
        <div className="relative h-[268px]">
          <div className="flex flex-col w-[646px] h-[39px] items-start gap-[10px] p-[12px] absolute top-0 left-0 overflow-hidden">
            <div className="flex flex-col h-[28px] items-start gap-[10px] relative self-stretch w-full mb-[-12.00px] opacity-40">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#3b3b3b] text-[10px] tracking-[0] leading-[normal]">
                Preview in Anima
              </div>
            </div>
          </div>
          <div className="absolute w-[646px] h-[268px] top-0 left-0 bg-[url(https://c.animaapp.com/nHaPlpU6/img/group-18.png)] bg-[100%_100%]">
            <img
              className="h-[234px] top-[34px] left-[11px] absolute w-[579px]"
              alt="Group"
              src="https://c.animaapp.com/nHaPlpU6/img/group-17.png"
            />
            <img
              className="h-[168px] top-[100px] left-[56px] absolute w-[579px]"
              alt="Group"
              src="https://c.animaapp.com/nHaPlpU6/img/group-16.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
