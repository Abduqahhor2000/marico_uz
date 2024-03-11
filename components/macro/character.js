import React from "react";

function Character({className}) {
  return (
    <div className={`${className}`}>
      <div className={`flex items-center justify-center max-w-[1920px] mx-auto h-[calc(100vw/2)] max-h-[800px] animate-moveSlow md:animate-move bg-[url("/character.jpeg")] bg-repeat-x bg-contain`}>
        <div className="text-2xl sm:text-[55px] xl:text-[75px] leading-normal text-center font-semibold text-white max-w-[1240px]">
          {`We've`} helped over 1,000 creatorsre claim control of their
          audience.
        </div>
      </div>
    </div>
  );
}

export default Character;
