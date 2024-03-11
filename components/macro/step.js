import React from "react";
import Button from "../micro/button";

function Step({count=1, title="", descreption="", haveButton=false, className}) {
  return (
    <div className={`mx-auto overflow-x-hidden text-white flex flex-col items-center px-5 ${className}`}>
      <div className="uppercase text-2xl leading-normal text-primary">Step {count}</div>
      <div className="text-[35px] md:text-[60px] xl:text-[75px] leading-normal font-semibold text-center">{title}</div>
      <div className="text-xl md:text-[30px] leading-normal text-border text-center max-w-[969px]">
        {descreption}
      </div>
      <div className={`pt-[34px] ${haveButton ? "block" : "hidden"}`}>
        <Button variant="outlined" className="py-6 px-9">
          View Avaliable Sources
        </Button>
      </div>
    </div>
  );
}

export default Step;
