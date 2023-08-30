import React from "react";

const Offer = ({ image, href, title, location, price }) => {
  return (
    <>
      <a
        href={href}
        className="flex w-1/2 gap-3 p-2 border-1 border-zinc-400 rounded-lg h-32 hover:text-lightBlue cursor-pointer min-w-17">
        <div className="w-2/5 rounded overflow-hidden">
          <img
            src={image}
            alt="offer image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-between">
          <p className="text-xs overflow-x-hidden whitespace-nowrap text-ellipsis text-zinc-600">
            {location}
          </p>
          <h3 className="text-sm">{title}</h3>
          <p className="text-lg font-bold text-black">
            {price}
            <span>zł</span>
          </p>
        </div>
      </a>
    </>
  );
};

export default Offer;
