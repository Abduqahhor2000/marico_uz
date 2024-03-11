import React from "react";
import Button from "../micro/button";
import Image from "next/image";

function Services({ className }) {
  return (
    <div className={`text-white ${className}`}>
      <div className="max-w-[1740px] mx-auto px-5 pb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="pt-8 pl-6 sm:pl-11 bg-darker">
          <div className="text-green-500 text-xl sm:text-[30px] leading-normal pb-8">
            One Link
          </div>
          <div className="font-semibold text-[45px] sm:text-[80px] leading-tight pb-6">
            <span className="text-light">ALL You Create.</span> One Link
          </div>
          <div className="pl-5 flex justify-end">
            <Image width={788} height={338} src="/mobile.svg" alt="" />
          </div>
        </div>
        <div className="pt-8 pl-6 sm:pl-11 bg-darker pb-28">
          <div className="text-green-500 text-xl lg:text-[30px] leading-normal pb-12 sm:pb-24">
            Collect Subscribers
          </div>
          <div className="font-semibold text-[45px] sm:text-[80px] leading-tight pb-6">
            <span className="text-light">Emails. <br/> Phone #s.</span> <br/> All Yours.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="!py-[22px] !px-20">Get Started</Button>
      </div>
    </div>
  );
}

export default Services;
