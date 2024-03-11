import React from "react";

function Title({ className }) {
  return (
    <div
      className={`text-clip overflow-hidden  font-bold px-2 text-[35px] sm:text-[55px] md:text-[80px] xl:text-[112px] leading-normal text-white max-sm:w-full sm:mx-auto text-center min-w-min ${className}`}
    >
      <div>
        Own your audience.
        <p
          className="leading-[110%] text-clip bg-gradient-to-r bg-clip-text text-transparent from-[rgb(254,103,131)] to-[rgb(255,191,132)] animate-gradient bg-repeat"
          style={{ backgroundSize: "300%" }}
        >{`So you don't lose them`}</p>
      </div>
    </div>
  );
}

export default Title;
