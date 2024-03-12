import React from "react";
import Item_sub from "../micro/item_sub";

function Mean_title({ className, ...props }) {
  return (
    <div
      className={`overflow-hidden max-w-[1485px] mx-auto px-5 text-white ${className}`}
      {...props}
    >
      <div data-aos="fade-up" className="text-[35px] md:text-[60px] xl:text-[75px] leading-normal font-semibold pb-16 text-center px-5 ">
        Why Creators Love Marico
      </div>
      <div className="flex flex-wrap justify-around">
        <Item_sub
          title={"Reduced Anxiety"}
          width={37}
          height={37}
          src={"/smile.svg"}
        >
          Never worry about losing your audience.
        </Item_sub>
        <Item_sub
          title={"Lower Workload"}
          width={34}
          height={34}
          src={"/happy.svg"}
        >
          Just share one link. {`We'll`} handle the rest.
        </Item_sub>
        <Item_sub title={"More Time"} width={42} height={42} src={"/party.svg"}>
          Spend less time on marketing tools
        </Item_sub>
      </div>
    </div>
  );
}

export default Mean_title;
