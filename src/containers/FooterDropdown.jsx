import React from "react";
import { FooterDropdownItem } from "../components";

const FooterDropdown = ({ dropdownContent, isHovered }) => {
  return (
    <>
      <ul
        className={`absolute flex flex-col gap-y-1 bg-white p-2 border-1 border-zinc-400 bottom-full right-1/2 translate-x-1/2 shadow-lg lg:hidden ${
          isHovered ? "block" : "hidden"
        }`}>
        {dropdownContent?.map((item, index) => {
          return (
            <FooterDropdownItem key={index} text={item.text} href={item.href} />
          );
        })}
      </ul>
    </>
  );
};

export default FooterDropdown;
