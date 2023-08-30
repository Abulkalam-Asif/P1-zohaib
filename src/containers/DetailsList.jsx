import React from "react";
import { DetailsAdditionalAreaItem, DetailsListItem } from "../components";

const DetailsList = ({ detailsListData }) => {
  return (
    <>
      <div className="text-sm">
        <dl className="grid grid-cols-3 gap-x-3 gap-y-4 py-6 lg:grid-cols-2 sm:grid-cols-1">
          {detailsListData.map((listItem, index) => (
            <DetailsListItem
              key={index}
              title={listItem.title}
              description={listItem.description}
            />
          ))}
        </dl>
        {/* This list the the list of Additional Area inside DetailsList Card */}
        <dl>
          <dt className="font-bold">Powierzchnia dodatkowa</dt>
          <div className="grid grid-cols-3 mt-3 sm:grid-cols-2 gap-y-1  ">
            <DetailsAdditionalAreaItem text="balkon" />
            <DetailsAdditionalAreaItem text="taras" />
            <DetailsAdditionalAreaItem text="piwnica" />
          </div>
        </dl>
      </div>
    </>
  );
};

export default DetailsList;
