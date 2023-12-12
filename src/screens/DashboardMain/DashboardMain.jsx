import React from "react";
import { ChartStyleBarchart } from "../../components/ChartStyleBarchart";
import { MediumDataBox } from "../../components/MediumDataBox";
import { PromoBox } from "../../components/PromoBox";
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";
import { XSmallDataBox } from "../../components/XSmallDataBox";
import { XxSmallDataBox } from "../../components/XxSmallDataBox";

export const DashboardMain = () => {
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 w-[1440px] h-[945px] relative">
        <TopMenu
          className="!absolute !left-[200px] !w-[1240px] !top-0"
          darkMode={false}
          searchBoxStyle="fill-imground"
        />
        <div className="flex flex-col w-[1144px] items-center justify-center gap-[24px] absolute top-[120px] left-[248px]">
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <PromoBox
              className="!self-stretch !h-[unset] !left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              style="color"
            />
            <XSmallDataBox
              chartStyle="tiny-bar-chart"
              className="!left-[unset] !top-[unset]"
              color="purple"
              darkMode={false}
            />
          </div>
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <XxSmallDataBox
              chartStyle="tiny-line-chart"
              chartTitleClassName="!mr-[-4.00px]"
              className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              color="red"
              darkMode={false}
            />
            <XxSmallDataBox
              chartStyle="tiny-line-chart"
              chartTitleClassName="!mr-[-4.00px]"
              className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]"
              color="yellow"
              darkMode={false}
            />
            <XxSmallDataBox
              chartStyle="tiny-line-chart"
              className="!w-[400px] !top-[unset]"
              color="green"
              darkMode={false}
            />
          </div>
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <ChartStyleBarchart className="!left-[unset] !flex-1 !grow !w-[unset] !top-[unset]" />
            <MediumDataBox
              chartStyle="donut-chart"
              className="!left-[unset] !w-[400px] !top-[unset]"
              color="various"
              darkMode={false}
              group="https://c.animaapp.com/nHaPlpU6/img/group@2x.png"
              img="https://c.animaapp.com/nHaPlpU6/img/vector-1@2x.png"
              vector="https://c.animaapp.com/nHaPlpU6/img/vector-2@2x.png"
              vector1="https://c.animaapp.com/nHaPlpU6/img/vector@2x.png"
            />
          </div>
        </div>
        <SideMenu className="!h-[945px] !absolute !left-0 !top-0" darkMode={false} logo="image" />
      </div>
    </div>
  );
};
