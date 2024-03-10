import React from "react";

function Title({className}) {
  return (
    <div className={`font-bold px-2 text-[55px] md:text-[80px] xl:text-[112px] leading-normal text-white mx-auto text-center min-w-min ${className}`}>
      <div>Own your audience.</div>
      <p className="leading-[110%] bg-gradient-to-r bg-clip-text text-transparent from-[rgb(254,103,131)] to-[rgb(255,191,132)] animate-gradient bg-repeat" style={{"backgroundSize": "300%"}}>{`So you don't lose them`}</p>
    </div>
  );
}

export default Title;
