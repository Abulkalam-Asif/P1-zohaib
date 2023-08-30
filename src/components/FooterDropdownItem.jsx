import React from "react";

const FooterDropdownItem = ({ text, href }) => {
  return (
    <>
      <li className="cursor-pointer whitespace-nowrap text-xs text-darkBlue hover:text-lightBlue">
        <a href={href}>{text}</a>
      </li>
    </>
  );
};

export default FooterDropdownItem;
