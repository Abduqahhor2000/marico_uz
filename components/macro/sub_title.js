import React from "react";
import Button from "../micro/button";

function Sub_title({ className }) {
  return (
    <div className={`max-w-[750px] mx-auto px-5 ${className}`}>
      <div className="text-white text-[25px] leading-normal font-medium text-center md:text-[40px]">
        Turn your audience into email and text message subscribers.
      </div>
      <div className="pt-[50px] flex justify-evenly max-md:flex-col">
        <Button className="!py-6 mb-5 md:!px-[72px]">Get Started Now</Button>
        <Button className="!py-6 mb-5 md:!px-[72px]" variant="outlined">
          View a Demo
        </Button>
      </div>
      <div className="text-[25px] max-md:text-lg leading-normal flex items-center justify-center">
        <span className="h-7 w-7 p-[5px] bg-[rgb(15,198,92)]/40 rounded-full flex items-center justify-center">
          <span className="h-full w-full rounded-full bg-[rgb(15,198,92)]"></span>
        </span>
        <span className="text-white font-bold px-2.5">1000+</span>
        <span className="text-border">creators have already started</span>
      </div>
    </div>
  );
}

export default Sub_title;
