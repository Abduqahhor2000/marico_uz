import React from "react";
import Nav_link from "../micro/nav_link";
import Image from "next/image";

function Footer({ className }) {
  return (
    <div className={`max-w-[1640px] mx-auto flex max-md:flex-col items-center justify-between px-5 ${className}`}>
      <div className="pb-7">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt=""
            loading="lazy"
            width={47}
            height={51}
            className="mr-6"
          />
          <span className="font-extrabold text-[42px] leading-[63px] text-white">
            Marico
          </span>
        </div>
        <div className="text-border text-[27px] leading-normal">info@marico.co</div>
      </div>
      <div className="flex justify-around flex-wrap">
        <Nav_link url="/">Home</Nav_link>
        <Nav_link url="/about">About</Nav_link>
        <Nav_link url="/pricing">Pricing</Nav_link>
        <Nav_link url="/blog">Blog</Nav_link>
      </div>
    </div>
  );
}

export default Footer;
