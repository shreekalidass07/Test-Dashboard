/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const MediumDataBox = ({
  chartStyle,
  darkMode,
  color,
  className,
  group = "https://c.animaapp.com/nHaPlpU6/img/group-34@2x.png",
  vector = "https://c.animaapp.com/nHaPlpU6/img/vector-29@2x.png",
  img = "https://c.animaapp.com/nHaPlpU6/img/vector-28@2x.png",
  vector1 = "https://c.animaapp.com/nHaPlpU6/img/vector-27@2x.png",
}) => {
  return (
    <div
      className={`w-[333px] left-[20px] flex flex-col items-center gap-[12px] p-[24px] h-[358px] rounded-[8px] relative ${
        !darkMode && chartStyle === "pie-chart" && color === "purple"
          ? "top-[20px]"
          : !darkMode && chartStyle === "pie-chart" && color === "green"
          ? "top-[402px]"
          : !darkMode && color === "various"
          ? "top-[784px]"
          : !darkMode && color === "red"
          ? "top-[1166px]"
          : !darkMode && color === "green" && chartStyle === "tiny-area-chart"
          ? "top-[1548px]"
          : !darkMode && chartStyle === "tiny-area-chart" && color === "purple"
          ? "top-[1930px]"
          : chartStyle === "pie-chart" && darkMode && color === "purple"
          ? "top-[2312px]"
          : chartStyle === "pie-chart" && darkMode && color === "green"
          ? "top-[2694px]"
          : darkMode && color === "various"
          ? "top-[3076px]"
          : darkMode && color === "red"
          ? "top-[3458px]"
          : color === "green" && chartStyle === "tiny-area-chart" && darkMode
          ? "top-[3840px]"
          : chartStyle === "tiny-area-chart" && darkMode && color === "purple"
          ? "top-[4222px]"
          : ""
      } ${darkMode ? "bg-backgroundsdark-cards" : "bg-white"} ${className}`}
    >
      <div
        className={`w-full flex self-stretch items-center flex-[0_0_auto] relative ${
          !darkMode && chartStyle === "pie-chart" && color === "purple" ? "gap-[20px]" : ""
        } ${
          chartStyle === "donut-chart" ||
          (chartStyle === "tiny-area-chart" && color === "purple" && !darkMode) ||
          color === "green" ||
          (color === "purple" && darkMode) ||
          color === "red"
            ? "justify-between"
            : ""
        }`}
      >
        <div
          className={`font-chart-titles-chart-title-m w-[115.31px] mt-[-1.00px] tracking-[var(--chart-titles-chart-title-m-letter-spacing)] text-[length:var(--chart-titles-chart-title-m-font-size)] [font-style:var(--chart-titles-chart-title-m-font-style)] font-[number:var(--chart-titles-chart-title-m-font-weight)] leading-[var(--chart-titles-chart-title-m-line-height)] relative ${
            darkMode ? "text-gray" : "text-black"
          }`}
        >
          Chart Title
        </div>
        <div
          className={`inline-flex gap-[8px] flex-[0_0_auto] relative ${
            chartStyle === "donut-chart" ||
            (chartStyle === "pie-chart" && color === "green" && !darkMode) ||
            (chartStyle === "tiny-area-chart" && color === "green") ||
            color === "purple" ||
            color === "red"
              ? "items-center"
              : chartStyle === "pie-chart" && darkMode && color === "green"
              ? "items-start"
              : ""
          } ${!darkMode && chartStyle === "pie-chart" && color === "purple" ? "mr-[-0.25px]" : ""}`}
        >
          <img
            className="w-[14.7px] h-[14.7px] relative"
            alt="Arrow upward"
            src={
              !darkMode && chartStyle === "pie-chart" && color === "purple"
                ? "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-27@2x.png"
                : (chartStyle === "donut-chart" && !darkMode) ||
                  (chartStyle === "tiny-area-chart" && color === "purple" && !darkMode) ||
                  (color === "green" && !darkMode) ||
                  (color === "red" && !darkMode)
                ? "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-26@2x.png"
                : (chartStyle === "donut-chart" && darkMode) ||
                  (chartStyle === "tiny-area-chart" && color === "green" && darkMode) ||
                  (color === "purple" && darkMode) ||
                  (color === "red" && darkMode)
                ? "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-21@2x.png"
                : chartStyle === "pie-chart" && darkMode && color === "green"
                ? "https://c.animaapp.com/nHaPlpU6/img/arrow-upward-20@2x.png"
                : undefined
            }
          />
          <div
            className={`font-text-small-text w-[127.25px] mt-[-1.00px] tracking-[var(--text-small-text-letter-spacing)] text-[length:var(--text-small-text-font-size)] [font-style:var(--text-small-text-font-style)] font-[number:var(--text-small-text-font-weight)] text-right leading-[var(--text-small-text-line-height)] relative ${
              darkMode ? "text-gray" : "text-black"
            }`}
          >
            1.10% Since yesterday
          </div>
        </div>
      </div>
      <div className="w-[285px] h-[272px] relative">
        {darkMode && color === "various" && (
          <div className="flex flex-col w-[285px] h-[39px] items-start gap-[10px] p-[12px] absolute top-0 left-0 overflow-hidden">
            <div className="flex flex-col h-[28px] items-start gap-[10px] relative self-stretch w-full mb-[-12.00px] opacity-40">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-[#3b3b3b] text-[10px] tracking-[0] leading-[normal]">
                Preview in Anima
              </div>
            </div>
          </div>
        )}

        <div
          className={`${color === "various" ? "w-[193px]" : chartStyle === "pie-chart" ? "w-[199px]" : ""} ${
            color === "various" ? "left-[36px]" : chartStyle === "pie-chart" ? "left-[40px]" : ""
          } ${color === "various" ? "top-[41px]" : chartStyle === "pie-chart" ? "top-[54px]" : ""} ${
            color === "various"
              ? "h-[165px]"
              : chartStyle === "pie-chart"
              ? "h-[161px]"
              : chartStyle === "tiny-area-chart"
              ? "h-[272px]"
              : ""
          } ${
            darkMode && color === "various"
              ? "absolute"
              : chartStyle === "pie-chart" ||
                chartStyle === "tiny-area-chart" ||
                (!darkMode && chartStyle === "donut-chart")
              ? "relative"
              : ""
          }`}
        >
          {["donut-chart", "pie-chart"].includes(chartStyle) && (
            <div
              className={`relative ${
                color === "various" ? "h-[166px]" : chartStyle === "pie-chart" ? "h-[161px]" : ""
              }`}
            >
              <img
                className={`absolute ${
                  color === "various" ? "w-[141px]" : chartStyle === "pie-chart" ? "w-[121px]" : ""
                } ${color === "various" ? "left-[36px]" : chartStyle === "pie-chart" ? "left-[42px]" : ""} ${
                  color === "various" ? "top-[25px]" : chartStyle === "pie-chart" ? "top-[22px]" : ""
                } ${color === "various" ? "h-[141px]" : chartStyle === "pie-chart" ? "h-[121px]" : ""}`}
                alt="Group"
                src={
                  darkMode && color === "various"
                    ? "https://c.animaapp.com/nHaPlpU6/img/group-34@2x.png"
                    : !darkMode && color === "purple"
                    ? "https://c.animaapp.com/nHaPlpU6/img/group-36@2x.png"
                    : !darkMode && color === "green"
                    ? "https://c.animaapp.com/nHaPlpU6/img/group-35@2x.png"
                    : !darkMode && color === "various"
                    ? group
                    : darkMode && color === "purple"
                    ? "https://c.animaapp.com/nHaPlpU6/img/group-27@2x.png"
                    : color === "green" && darkMode
                    ? "https://c.animaapp.com/nHaPlpU6/img/group-26@2x.png"
                    : undefined
                }
              />
              <div
                className={`left-0 top-0 absolute ${
                  color === "various" ? "w-[193px]" : chartStyle === "pie-chart" ? "w-[199px]" : ""
                } ${color === "various" ? "h-[162px]" : chartStyle === "pie-chart" ? "h-[161px]" : ""}`}
              >
                <div
                  className={`absolute ${
                    chartStyle === "pie-chart" ? "w-[40px]" : color === "various" ? "w-[33px]" : ""
                  } ${chartStyle === "pie-chart" ? "left-[147px]" : color === "various" ? "left-[133px]" : ""} ${
                    chartStyle === "pie-chart" ? "top-[15px]" : color === "various" ? "top-0" : ""
                  } ${chartStyle === "pie-chart" ? "h-[26px]" : color === "various" ? "h-[30px]" : ""}`}
                >
                  <div
                    className={`relative ${
                      chartStyle === "pie-chart" ? "w-[38px]" : color === "various" ? "w-[31px]" : ""
                    } ${chartStyle === "pie-chart" ? "h-[26px]" : color === "various" ? "h-[31px]" : ""}`}
                  >
                    <img
                      className={`left-0 top-[12px] absolute ${
                        chartStyle === "pie-chart" ? "w-[15px]" : color === "various" ? "w-[9px]" : ""
                      } ${chartStyle === "pie-chart" ? "h-[14px]" : color === "various" ? "h-[19px]" : ""}`}
                      alt="Vector"
                      src={
                        !darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-41@2x.png"
                          : !darkMode && color === "green"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-35@2x.png"
                          : darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-26@2x.png"
                          : color === "green" && darkMode
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-20@2x.png"
                          : darkMode && color === "various"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-14@2x.png"
                          : !darkMode && color === "various"
                          ? vector
                          : undefined
                      }
                    />
                    <div
                      className={`[font-family:'Inter',Helvetica] tracking-[0] text-[12px] top-0 font-normal leading-[normal] absolute ${
                        chartStyle === "pie-chart" ? "left-[15px]" : color === "various" ? "left-[8px]" : ""
                      } ${
                        !darkMode && color === "purple"
                          ? "text-[#3b1ead]"
                          : color === "green"
                          ? "text-[#2bebc8]"
                          : darkMode && color === "purple"
                          ? "text-[#694bdb]"
                          : color === "various"
                          ? "text-[#ff7777]"
                          : ""
                      }`}
                    >
                      {chartStyle === "pie-chart" && <>400</>}

                      {color === "various" && <>300</>}
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute ${
                    color === "various" ? "w-[43px]" : chartStyle === "pie-chart" ? "w-[35px]" : ""
                  } ${color === "various" ? "left-0" : chartStyle === "pie-chart" ? "left-[41px]" : ""} ${
                    color === "various" ? "top-[118px]" : chartStyle === "pie-chart" ? "top-0" : ""
                  } ${color === "various" ? "h-[15px]" : chartStyle === "pie-chart" ? "h-[30px]" : ""}`}
                >
                  <div
                    className={`relative ${
                      color === "various" ? "w-[42px]" : chartStyle === "pie-chart" ? "w-[33px]" : ""
                    } ${color === "various" ? "h-[15px]" : chartStyle === "pie-chart" ? "h-[30px]" : ""}`}
                  >
                    <img
                      className={`left-[23px] absolute ${
                        color === "various" ? "w-[19px]" : chartStyle === "pie-chart" ? "w-[11px]" : ""
                      } ${color === "various" ? "top-[4px]" : chartStyle === "pie-chart" ? "top-[12px]" : ""} ${
                        color === "various" ? "h-[9px]" : chartStyle === "pie-chart" ? "h-[18px]" : ""
                      }`}
                      alt="Vector"
                      src={
                        darkMode && color === "various"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-28@2x.png"
                          : !darkMode && color === "various"
                          ? img
                          : !darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-40@2x.png"
                          : color === "green"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-34@2x.png"
                          : darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-25@2x.png"
                          : undefined
                      }
                    />
                    <div
                      className={`[font-family:'Inter',Helvetica] left-0 tracking-[0] text-[12px] top-0 font-normal text-right leading-[normal] absolute ${
                        ["green", "various"].includes(color)
                          ? "text-[#2bebc8]"
                          : !darkMode && color === "purple"
                          ? "text-[#3b1ead]"
                          : darkMode && color === "purple"
                          ? "text-[#694bdb]"
                          : ""
                      }`}
                    >
                      300
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute ${
                    color === "various" ? "w-[39px]" : chartStyle === "pie-chart" ? "w-[45px]" : ""
                  } ${color === "various" ? "left-[156px]" : chartStyle === "pie-chart" ? "left-0" : ""} ${
                    color === "various" ? "top-[145px]" : chartStyle === "pie-chart" ? "top-[75px]" : ""
                  } ${color === "various" ? "h-[17px]" : chartStyle === "pie-chart" ? "h-[15px]" : ""}`}
                >
                  <div
                    className={`relative ${
                      color === "various" ? "w-[37px]" : chartStyle === "pie-chart" ? "w-[43px]" : ""
                    } ${color === "various" ? "h-[17px]" : chartStyle === "pie-chart" ? "h-[15px]" : ""}`}
                  >
                    <img
                      className={`absolute ${
                        color === "various" ? "w-[15px]" : chartStyle === "pie-chart" ? "w-[20px]" : ""
                      } ${color === "various" ? "left-0" : chartStyle === "pie-chart" ? "left-[23px]" : ""} ${
                        color === "various" ? "top-0" : chartStyle === "pie-chart" ? "top-[10px]" : ""
                      } ${color === "various" ? "h-[15px]" : chartStyle === "pie-chart" ? "h-[2px]" : ""}`}
                      alt="Vector"
                      src={
                        darkMode && color === "various"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-27@2x.png"
                          : !darkMode && color === "various"
                          ? vector1
                          : !darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-39@2x.png"
                          : color === "green"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-33@2x.png"
                          : darkMode && color === "purple"
                          ? "https://c.animaapp.com/nHaPlpU6/img/vector-24@2x.png"
                          : undefined
                      }
                    />
                    <div
                      className={`[font-family:'Inter',Helvetica] tracking-[0] text-[12px] font-normal leading-[normal] absolute ${
                        color === "various" ? "left-[14px]" : chartStyle === "pie-chart" ? "left-0" : ""
                      } ${color === "various" ? "top-[2px]" : chartStyle === "pie-chart" ? "top-0" : ""} ${
                        color === "various" || (darkMode && color === "purple")
                          ? "text-[#694bdb]"
                          : !darkMode && color === "purple"
                          ? "text-[#3b1ead]"
                          : color === "green"
                          ? "text-[#2bebc8]"
                          : ""
                      } ${chartStyle === "pie-chart" ? "text-right" : ""}`}
                    >
                      {color === "various" && <>200</>}

                      {chartStyle === "pie-chart" && <>300</>}
                    </div>
                  </div>
                </div>
                {chartStyle === "pie-chart" && (
                  <>
                    <div className="w-[36px] left-[37px] top-[133px] h-[20px] absolute">
                      <div className="w-[34px] h-[20px] relative">
                        <img
                          className="w-[12px] left-[23px] top-0 h-[17px] absolute"
                          alt="Vector"
                          src={
                            !darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-38@2x.png"
                              : color === "green"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-32@2x.png"
                              : darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-23@2x.png"
                              : undefined
                          }
                        />
                        <div
                          className={`[font-family:'Inter',Helvetica] left-0 tracking-[0] text-[12px] top-[5px] font-normal text-right leading-[normal] absolute ${
                            !darkMode && color === "purple"
                              ? "text-[#3b1ead]"
                              : color === "green"
                              ? "text-[#2bebc8]"
                              : darkMode && color === "purple"
                              ? "text-[#694bdb]"
                              : ""
                          }`}
                        >
                          200
                        </div>
                      </div>
                    </div>
                    <div className="w-[31px] left-[123px] top-[139px] h-[22px] absolute">
                      <div className="w-[29px] h-[22px] relative">
                        <img
                          className="w-[8px] left-0 top-0 h-[19px] absolute"
                          alt="Vector"
                          src={
                            !darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-37@2x.png"
                              : color === "green"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-31@2x.png"
                              : darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-22@2x.png"
                              : undefined
                          }
                        />
                        <div
                          className={`[font-family:'Inter',Helvetica] left-[7px] tracking-[0] text-[12px] top-[7px] font-normal leading-[normal] absolute ${
                            !darkMode && color === "purple"
                              ? "text-[#3b1ead]"
                              : color === "green"
                              ? "text-[#2bebc8]"
                              : darkMode && color === "purple"
                              ? "text-[#694bdb]"
                              : ""
                          }`}
                        >
                          278
                        </div>
                      </div>
                    </div>
                    <div className="w-[42px] left-[159px] top-[98px] h-[15px] absolute">
                      <div className="w-[40px] h-[15px] relative">
                        <img
                          className="w-[19px] left-0 top-[5px] h-[8px] absolute"
                          alt="Vector"
                          src={
                            !darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-36@2x.png"
                              : color === "green"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-30@2x.png"
                              : darkMode && color === "purple"
                              ? "https://c.animaapp.com/nHaPlpU6/img/vector-21@2x.png"
                              : undefined
                          }
                        />
                        <div
                          className={`[font-family:'Inter',Helvetica] left-[19px] tracking-[0] text-[12px] top-0 font-normal leading-[normal] absolute ${
                            !darkMode && color === "purple"
                              ? "text-[#3b1ead]"
                              : color === "green"
                              ? "text-[#2bebc8]"
                              : darkMode && color === "purple"
                              ? "text-[#694bdb]"
                              : ""
                          }`}
                        >
                          189
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {chartStyle === "tiny-area-chart" && (
            <>
              <div className="w-[285px] left-0 flex flex-col items-start top-0 gap-[10px] p-[12px] h-[39px] overflow-hidden absolute">
                <div className="w-full flex self-stretch flex-col items-start opacity-40 gap-[10px] h-[28px] mb-[-12.00px] relative">
                  <div className="[font-family:'Mulish',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[10px] text-[#3b3b3b] font-semibold leading-[normal] relative">
                    Preview in Anima
                  </div>
                </div>
              </div>
              <div className="w-[285px] left-0 top-[4px] bg-[100%_100%] h-[268px] bg-[url(https://c.animaapp.com/nHaPlpU6/img/group-33@2x.png)] absolute">
                <img
                  className={`w-[285px] left-0 absolute ${
                    color === "red" ? "top-0" : color === "green" ? "top-[8px]" : color === "purple" ? "top-[12px]" : ""
                  } ${
                    color === "red"
                      ? "h-[268px]"
                      : color === "green"
                      ? "h-[260px]"
                      : color === "purple"
                      ? "h-[256px]"
                      : ""
                  }`}
                  alt="Group"
                  src={
                    color === "red"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-32@2x.png"
                      : color === "green"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-30@2x.png"
                      : !darkMode && color === "purple"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-28@2x.png"
                      : darkMode && color === "purple"
                      ? "https://c.animaapp.com/nHaPlpU6/img/group-19@2x.png"
                      : undefined
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
