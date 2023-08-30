import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavDropdown } from "../containers";

const Navitem = ({
  text,
  iconBefore,
  iconAfter,
  isLink,
  className,
  dropdownContent,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    if (window.innerWidth <= 1024) {
      setIsClicked((prevState) => !prevState);
    }
  };
  const handleIsHovered = () => {
    if (window.innerWidth > 1024) {
      setIsHovered((prevState) => !prevState);
    }
  };
  return (
    <>
      <li
        className={`relative ${className}`}
        onMouseEnter={handleIsHovered}
        onMouseLeave={handleIsHovered}
        onClick={handleIsClicked}>
        {isLink ? (
          <a
            href="#"
            className="flex gap-2 items-center text-sm px-6 py-4 transition-colors duration-200 hover:text-lightBlue hover:bg-extraLightBlue cursor-pointer lg:py-3 lg:px-0">
            {iconBefore && <FontAwesomeIcon icon={iconBefore} size="lg" />}
            <span className="text-sm">{text}</span>
          </a>
        ) : (
          <>
            <span className="flex gap-2 items-center text-sm px-6 py-4 transition-colors duration-200 hover:text-lightBlue hover:bg-extraLightBlue cursor-pointer lg:py-3 lg:px-0 lg:justify-between">
              <span className="text-sm">{text}</span>
              {iconAfter && (
                <FontAwesomeIcon
                  icon={iconAfter}
                  size="lg"
                  className={`transition-transform duration-200 ${
                    isHovered || isClicked ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </span>
            <NavDropdown
              isHovered={isHovered}
              isClicked={isClicked}
              dropdownContent={dropdownContent}
            />
          </>
        )}
      </li>
    </>
  );
};
Navitem.defaultProps = {
  isLink: false,
  iconBefore: null,
  iconAfter: null,
  className: "",
};

export default Navitem;
