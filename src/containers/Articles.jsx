import React from "react";
import { Article } from "../components";
import * as articleImagesImport from "../assets/articles";

const articleImagesCount = Object.keys(articleImagesImport).length;
const articleImages = Array.from(
  { length: articleImagesCount },
  (_, index) => articleImagesImport[`article${index + 1}`]
);

const Articles = ({ articlesData }) => {
  return (
    <>
      <div className="flex mt-4 gap-x-4 flex-nowrap overflow-x-auto">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            image={articleImages[index] && articleImages[index]}
            location={article.location}
            title={article.title}
          />
        ))}
      </div>
    </>
  );
};

export default Articles;
