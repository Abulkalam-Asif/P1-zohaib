import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const DetailsAdditionalAreaItem = ({ text }) => {
  return (
    <>
      <dd className="space-x-3">
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="lg"
          className="text-[#46b04a]"
        />
        <span>{text}</span>
      </dd>
    </>
  );
};

export default DetailsAdditionalAreaItem;
