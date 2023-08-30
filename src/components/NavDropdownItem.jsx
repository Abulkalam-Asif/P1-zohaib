import React from "react";

const NavDropdownItem = ({ text, href }) => {
  return (
    <>
      <li>
        <a
          href={href}
          className="inline-block w-full text-sm px-4 py-2 ml-2 transition-colors duration-200 hover:text-lightBlue cursor-pointer whitespace-nowrap lg:px-0 lg:m-0">
          {text}
        </a>
      </li>
    </>
  );
};

export default NavDropdownItem;
