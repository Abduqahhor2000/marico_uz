import Image from "next/image";
import React from "react";
import Button from "../micro/button";

function End({ className }) {
  return (
    <div
      className={`max-w-[900px] mx-auto flex flex-col items-center text-white px-2 ${className}`}
    >
      <div className="max-sm:w-20">
        <Image width={165} height={155} src={"logo.svg"} alt="" />
      </div>
      <div className="text-5xl sm:text-[100px] leading-normal font-bold text-center pt-5">
        Get Started Now
      </div>
      <div className="text-2xl sm:text-[44px] leading-normal text-center pb-4">
        Setup is easy and takes under 5 minutes.
      </div>
      <Button className="!py-5 sm:!py-[30px] max-sm:w-full sm:!px-[115px] !text-[30px]">
        Get Started Now
      </Button>
      <div className="max-md:text-xl text-[38px] leading-normal flex items-center justify-center flex-wrap text-border pt-6">
        <span className="h-7 w-7 p-[5px] bg-[rgb(15,198,92)]/40 rounded-full flex items-center justify-center">
          <span className="h-full w-full rounded-full bg-[rgb(15,198,92)]"></span>
        </span>
        <span className="text-white font-bold px-2.5">1000+</span>
        creators have already started
      </div>
    </div>
  );
}

export default End;
