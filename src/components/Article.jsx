import React from "react";

const Article = ({ image, href, title, location }) => {
  return (
    <a
      href={href}
      className="flex flex-col gap-3 p-2 border-1 border-zinc-400 rounded-lg hover:text-lightBlue cursor-pointer min-w-10">
      <div className="rounded overflow-hidden w-full flex-1">
        <img
          src={image}
          alt="article image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 flex flex-col justify-between px-2">
        <p className="text-xs overflow-x-hidden whitespace-nowrap text-ellipsis text-zinc-600">
          {location}
        </p>
        <h3 className="text-sm overflow-hidden h-12">
          <span
            className="block overflow-hidden overflow-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}>
            {title}
          </span>
        </h3>
      </div>
    </a>
  );
};

export default Article;
