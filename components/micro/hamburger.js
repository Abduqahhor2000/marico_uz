import React from "react";

function Hamburger({isOpen, ...props}) {
  return (
    <div className="w-10 h-10 overflow-hidden relative cursor-pointer" {...props}>
      <div className="flex flex-col items-center justify-center h-10 w-10">
        <div
          className={`relative w-9 h-1 rounded-full bg-primary duration-500 origin-center ${
            isOpen
              ? "my-1"
              : "top-1 -rotate-45"
          }`}
        ></div>
        <div
          className={`relative w-9 h-1 rounded-full bg-primary duration-500 ${
            isOpen
              ? "left-0 my-1"
              : "left-24"
          }`}
        ></div>
        <div
          className={`relative w-9 h-1 rounded-full bg-primary duration-500 origin-center ${
            isOpen
              ? "my-1"
              : "bottom-1 rotate-45"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Hamburger;
