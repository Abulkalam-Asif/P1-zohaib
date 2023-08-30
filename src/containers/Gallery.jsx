import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";

const Gallery = ({ showVideo, images, imagesCount, showGalleryModal }) => {
  return (
    <>
      {/* For Desktop and tablet - 641px - 1280px */}
      <div className="grid grid-cols-8 gap-x-2 lg:grid-cols-5 sm:hidden">
        <div className="relative col-span-4 rounded cursor-pointer overflow-hidden lg:col-span-3">
          <img
            src={images[0]}
            alt="house"
            className="h-full object-cover"
            onClick={showGalleryModal}
          />
          <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
            {imagesCount}
            <FontAwesomeIcon icon={faImages} className="ml-2" />
          </span>
          <button
            onClick={showVideo}
            className="absolute top-2 left-2 bg-white text-darkBlue hover:bg-lightBlue hover:text-white px-3 py-2 text-sm font-bold rounded">
            Wideo
          </button>
        </div>
        <div className="col-span-2 rounded cursor-pointer overflow-hidden lg:col-span-1">
          <img
            src={images[1]}
            alt="house"
            className="h-full object-cover"
            onClick={showGalleryModal}
          />
        </div>
        <div className="col-span-1 rounded cursor-pointer overflow-hidden lg:hidden">
          <img
            src={images[2]}
            alt="house"
            className="h-full object-cover"
            onClick={showGalleryModal}
          />
        </div>
        <div className="col-span-1 rounded relative cursor-pointer overflow-hidden">
          <img
            src={window.innerWidth > 1024 ? images[3] : images[2]}
            alt="house"
            className="h-full object-cover brightness-30"
            onClick={showGalleryModal}
          />
          <span className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 text-white font-bold">
            +{imagesCount - 4}
          </span>
        </div>
      </div>
      {/* For Mobile - up to 640px */}
      <div className="relative hidden sm:flex sm:gap-x-2 sm:h-60 sm:overflow-x-scroll">
        <button
          onClick={showVideo}
          className="absolute top-2 left-2 bg-white text-darkBlue hover:bg-lightBlue hover:text-white px-3 py-2 text-sm font-bold rounded z-10">
          Wideo
        </button>
        {images?.map((image, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt="house"
              className="w-full h-full object-cover"
              onClick={showGalleryModal}
            />
            {index === 0 && (
              <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
                {imagesCount}
                <FontAwesomeIcon icon={faImages} className="ml-2" />
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
