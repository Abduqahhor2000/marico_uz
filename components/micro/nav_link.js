import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Nav_link({ children, url = "", ...props }) {
  const pathname = usePathname();
//   console.log(pathname);
  return (
    <div
      className={`select-none text-xl cursor-pointer leading-normal text-border hover:text-primary duration-200 px-5 after:content-[""] after:block after:w-0 after:border-b-[1px] after:border-primary hover:after:w-full after:duration-200 ${
        pathname === url ? "text-primary" : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Nav_link;
