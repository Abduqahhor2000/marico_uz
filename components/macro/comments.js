import Image from "next/image";
import React from "react";

function Comments({ className }) {
  return (
    <div
      className={`max-w-[1826px] mx-auto text-white flex items-center flex-col ${className}`}
    >
      <div className="text-[35px] md:text-[60px] xl:text-[75px] leading-normal pb-12 text-center font-semibold">
        Experts Agree
      </div>
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="w-[1300px] md:w-[1800px]">
          <Image src={"/coments.png"} height={440} width={1826} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Comments;
