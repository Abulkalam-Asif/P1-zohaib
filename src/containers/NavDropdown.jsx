import React from "react";
import { NavDropdownItem } from "../components";

const NavDropdown = ({ dropdownContent, isHovered, isClicked }) => {
  return (
    <>
      <ul
        className={`absolute z-10 right-0 py-4 min-w-[17rem] bg-white rounded shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)] lg:static lg:w-full lg:py-1 lg:shadow-none ${
          isHovered ? "block" : "hidden"
        } ${isClicked ? "lg:block" : "lg:hidden"}`}>
        {dropdownContent?.map((item, index) => {
          return (
            <NavDropdownItem key={index} text={item.text} href={item.href} />
          );
        })}
      </ul>
    </>
  );
};

export default NavDropdown;
