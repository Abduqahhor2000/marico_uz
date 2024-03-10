import React, { useRef } from "react";
import Nav_link from "../micro/nav_link";
import Button from "../micro/button";

function Drawer({ isOpen, setIsOpen }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={(e) => (e.target === ref.current ? setIsOpen(true) : "")}
      className={`fixed top-28 w-screen h-screen duration-500 lg:hidden ${
        isOpen ? "-right-full" : "right-0"
      }`}
    >
      <div className="absolute w-72 h-96 bg-slate-950 right-0 p-5 grid grid-cols-1 gap-2 rounded-s-lg">
        <Nav_link url="/">Home</Nav_link>
        <Nav_link url="/about">About</Nav_link>
        <Nav_link url="/pricing">Pricing</Nav_link>
        <Nav_link url="/blog">Blog</Nav_link>
        <div>
          <Button className="!px-5 !py-3 text-start" variant="text">
            Login
          </Button>
          <Button className="!px-5 !py-3 !pl-[22px] text-start">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
