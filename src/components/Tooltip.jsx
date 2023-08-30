import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tooltip = ({ message }) => {
  return (
    <>
      <span className="ml-2 cursor-pointer tooltip">
        <FontAwesomeIcon icon={faInfoCircle} />
        <span className="tooltip_text text-xs">{message}</span>
      </span>
    </>
  );
};

export default Tooltip;
