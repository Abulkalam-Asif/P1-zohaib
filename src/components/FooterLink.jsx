import React, { useState } from "react";
import { FooterDropdown } from "../containers";

const FooterLink = ({ text, dropdownContent, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = () => {
    setIsHovered((prevState) => !prevState);
  };
  return (
    <>
      <li
        className="relative cursor-pointer text-xs text-darkBlue hover:text-lightBlue"
        onMouseEnter={handleIsHovered}
        onMouseLeave={handleIsHovered}>
        <a href={href}>{text}</a>
        {dropdownContent && (
          <FooterDropdown
            dropdownContent={dropdownContent}
            isHovered={isHovered}
          />
        )}
      </li>
    </>
  );
};
FooterLink.defaultProps = {
  className: "",
};

export default FooterLink;
