import Image from "next/image";
import React, { useState } from "react";
import Button from "../micro/button";
import Nav_link from "../micro/nav_link";
import Hamburger from "../micro/hamburger";
import Drawer from "./drawer";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 text-white flex flex-wrap justify-between max-w-[1700px] px-[30px] mx-auto pt-[46px] bg-black">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt=""
            width={45}
            height={42}
            className="mr-4"
          />
          <span className="font-extrabold text-[37px] leading-[56px]">
            Marico
          </span>
        </div>
        <div className="flex items-center max-lg:hidden">
          <Nav_link url="/">Home</Nav_link>
          <Nav_link url="/about">About</Nav_link>
          <Nav_link url="/pricing">Pricing</Nav_link>
          <Nav_link url="/blog">Blog</Nav_link>
        </div>
        <div className="flex max-lg:hidden">
          <Button className="!px-5 !py-3" variant="text">
            Login
          </Button>
          <Button className="!px-5 !py-3 !pl-[22px]">Sign Up</Button>
        </div>
        <div className="flex items-center lg:hidden">
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
