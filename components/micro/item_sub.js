import Image from "next/image";
import React from "react";

function Item_sub({ title="", children="", ...props }) {
  return (
    <div className="flex flex-col items-center px-5 min-w-[350px] mb-8">
      <h3 className="flex items-center text-2xl md:text-[35px] leading-normal font-semibold pb-2.5">
        <Image src="/smile.svg" alt="" width={37} height={37} {...props} />
        <span className="pl-2">{title}</span>
      </h3>
      <p className="text-border text-lg md:text-[22px] leading-normal text-center">{children}</p>
    </div>
  );
}

export default Item_sub;
