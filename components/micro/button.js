import Link from "next/link";
import React from "react";

function Button({
  variant = "contained",
  className = "",
  children = "",
  ...props
}) {
  return (
    <Link href={"https://t.me/deyil"}>
      <div
        className={`select-none text-center rounded-xl pt-[18px] pb-[17px] px-[22px] text-xl leading-normal font-medium border duration-200 hover:cursor-pointer active:opacity-80 ${
          variant === "text"
            ? "border-transparent text-border hover:text-white"
            : variant === "outlined"
            ? " border-border text-border hover:text-white hover:border-white"
            : "bg-primary border-primary text-white "
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    </Link>
  );
}

export default Button;
