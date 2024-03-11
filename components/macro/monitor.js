import React from "react";
import Button from "../micro/button";
import Image from "next/image";

const words = {
  title: "",
  one: "",
  two: "",
  tree: "",
  pin1: "",
  pin2: ""
}

function Monitor({ words, className }) {
  return (
    <div
      className={`max-w-[1585px] overflow-x-hidden mx-auto text-white flex max-xl:flex-col justify-between ${className}`}
    >
      <div className="xl:min-w-[610px] max-xl:pb-10 px-5">
        <p className="text-xl md:text-[30px] leading-normal pt-2 pb-8 md:pb-12 xl:pb-20 font-medium">
           {words?.title}
        </p>
        <h3 className="text-[35px] md:text-[60px] xl:text-[75px] leading-normal font-semibold pb-7">
          <div> {words?.one}</div>
           {words?.two} <span className="text-primary"> {words?.three}</span>
        </h3>
        <div className="mb-2.5">
          <span className="inline-block w-[33px] h-[33px] rounded-full bg-border text-[18px] leading-normal text-center pt-[4px] pb-[2px] mr-3">
            1
          </span>
          {words.pin1}
         
        </div>
        <div>
          <span className="inline-block w-[33px] h-[33px] rounded-full bg-border text-[18px] leading-normal text-center pt-[4px] pb-[2px] mr-3">
            2
          </span>
          {words.pin2}
         
        </div>
        <div className="pt-10 md:pt-[66px] flex max-sm:flex-col">
          <Button className="max-sm:mb-5 sm:mr-6">Get Started Now</Button>
          <Button variant="outlined">View A Demo</Button>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="pl-5">
          <Image
            className=""
            width={820}
            height={715}
            src={words?.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Monitor;
