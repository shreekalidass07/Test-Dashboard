/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const PromoBox = ({ style, className }) => {
  return (
    <div
      className={`w-[720px] flex left-[17px] items-start p-[12px] h-[225px] rounded-[8px] justify-center relative ${
        style === "dark" ? "top-[269px]" : "top-[20px]"
      } ${style === "dark" ? "bg-backgroundsdark-cards" : "bg-dark-themegreen"} ${className}`}
    >
      <div className="flex self-stretch flex-col items-start grow gap-[15px] flex-1 p-[24px] relative">
        <div
          className={`font-chart-titles-chart-title-l self-stretch mt-[-1.00px] tracking-[var(--chart-titles-chart-title-l-letter-spacing)] text-[length:var(--chart-titles-chart-title-l-font-size)] [font-style:var(--chart-titles-chart-title-l-font-style)] font-[number:var(--chart-titles-chart-title-l-font-weight)] leading-[var(--chart-titles-chart-title-l-line-height)] relative ${
            style === "dark" ? "text-[#e3e3e3]" : "text-[#000000]"
          }`}
        >
          Welcome to your dashboard!
        </div>
        <p
          className={`font-text-small-text self-stretch tracking-[var(--text-small-text-letter-spacing)] [font-style:var(--text-small-text-font-style)] text-[length:var(--text-small-text-font-size)] font-[number:var(--text-small-text-font-weight)] leading-[var(--text-small-text-line-height)] relative ${
            style === "dark" ? "text-[#d0d0d0]" : "text-[#4a4a4a]"
          } ${style === "dark" ? "h-[73px]" : "h-[81px]"}`}
        >
          Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and
          release to production!
        </p>
      </div>
      <div className="w-full self-stretch grow flex-1 object-cover h-full overflow-hidden relative">
        <div className="w-full left-[360px] top-[12px] object-cover h-full relative" />
      </div>
    </div>
  );
};
