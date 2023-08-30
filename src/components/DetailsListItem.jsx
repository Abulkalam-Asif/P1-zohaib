import React from "react";

const DetailsListItem = ({ title, description }) => {
  return (
    <>
      <div className="pb-2 space-y-1 border-b-1 border-zinc-200 sm:flex sm: items-center sm:justify-between">
        <dt className="text-zinc-600">{title}</dt>
        <dd className="font-bold overflow-hidden whitespace-nowrap text-ellipsis">{description}</dd>
      </div>
    </>
  );
};

export default DetailsListItem;
