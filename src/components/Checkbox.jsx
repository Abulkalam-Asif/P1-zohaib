import React from "react";
import Tooltip from "./Tooltip";

const Checkbox = ({ label, nameIdHtmlFor, tooltipMessage }) => {
  return (
    <>
      <div className="flex items-start gap-x-2">
        <input
          type="checkbox"
          name={nameIdHtmlFor}
          id={nameIdHtmlFor}
          className="mt-1"
        />
        <label className="text-zinc-600 text-sm " htmlFor={nameIdHtmlFor}>
          {label}
          <Tooltip message={tooltipMessage} />
        </label>
      </div>
    </>
  );
};

export default Checkbox;
