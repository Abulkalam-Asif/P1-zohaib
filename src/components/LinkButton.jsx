import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LinkButton = ({
  icon,
  iconSize,
  text,
  textSize,
  href,
  type,
  className,
  textSizeClassName,
  hideIconOnSm,
  specialPadding,
}) => {
  // icon - provide the fontawesome icon like "faUser"
  // iconSize - xs-sm-...-10x
  // text - text to be displayed in the link
  // type - {darkBlueFilled, lightBlueFilled, extraLightBlueFilled}
  // textSizeClassName and hideIconOnSm are specificly added to accomodate the strange behavior of +DODAJ OGŁOSZENIE button on the header

  let typeStyles = "";
  if (type === "darkBlueFilled") {
    typeStyles = "bg-darkBlue text-white hover:bg-lightBlue";
  } else if (type === "lightBlueFilled") {
    typeStyles = "bg-lightBlue text-white";
  } else if (type === "extraLightBlueFilled") {
    typeStyles =
      "bg-extraLightBlue text-darkBlue hover:bg-darkBlue hover:text-white";
  } else if (type === "darkBlueOutlined") {
    typeStyles =
      "bg-white text-darkBlue border-2 border-darkBlue hover:bg-lightBlue hover:text-white hover:border-lightBlue";
  } else if (type === "darkGreenFilled") {
    typeStyles = "bg-darkGreen text-white hover:bg-lightGreen";
  } else if (type === "lightGreenFilled") {
    typeStyles = "bg-lightGreen text-white";
  }

  let textSizeStyles = "";
  if (textSize === "xs") {
    textSizeStyles = "text-xs font-bold";
  } else if (textSize === "sm") {
    textSizeStyles = "text-sm font-bold";
  } else if (textSize === "base") {
    textSizeStyles = "text-base font-semibold";
  } else if (textSize === "lg") {
    textSizeStyles = "text-lg";
  }

  return (
    <>
      <a
        href={href}
        className={`flex gap-x-2 items-center rounded ${
          specialPadding || "px-4 py-2"
        } justify-center transition-colors cursor-pointer duration-200 ${typeStyles} ${className} sm:px-3`}>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            className={`${hideIconOnSm && "sm:hidden"}`}
          />
        )}
        {text && (
          <span
            className={`whitespace-nowrap ${textSizeStyles} ${textSizeClassName}`}>
            {text}
          </span>
        )}
      </a>
    </>
  );
};

LinkButton.defaultProps = {
  text: null,
  icon: null,
  textSize: "base",
  iconSize: "1x",
  type: "darkBlueFilled",
  hideIconOnSm: false,
  specialPadding: null,
  textSizeClassName: "",
  className: "",
};

export default LinkButton;
