import React, { useRef } from "react";
import ReactModal from "react-modal";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faX } from "@fortawesome/free-solid-svg-icons";
import GalleryCarousel from "./GalleryCarousel";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

function GalleryModal({ showModal, handleCloseModal, images }) {
  const numberRef = useRef(null);
  const showNumberHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.display = "none";
    numberRef.current.style.width = "auto";
  };

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      className="GalleryModal"
      ariaHideApp={false}
      appElement={document.getElementById("root")}
      overlayClassName={"Overlay"}>
      <div className="flex flex-col gap-y-4 h-full md:gap-y-0">
        <div className="flex items-center justify-between bg-extraLightBlue py-4 px-8 sm:px-2">
          <div>
            <div className="flex gap-x-10 text-lg sm:gap-x-4 sm:text-base">
              <span className="font-bold">3 850 000 zł</span>
              <span className="text-zinc-600">
                20 698,92 zł/m<sup>2</sup>
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                className="text-darkBlue"
              />
              <span className="text-sm font-bold">
                Warszawa,{" "}
                <span className="font-normal text-darkBlue">
                  Żoliborz, mazowieckie
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:hidden">
            <div className="flex items-center gap-1">
              <span className="text-sm">tel.</span>{" "}
              <span
                ref={numberRef}
                className="text-lg font-extrabold w-16 whitespace-nowrap overflow-x-hidden text-ellipsis">
                +48 668 580 101
              </span>
              <Button
                text={"POKAŻ NUMER"}
                type="darkGreenFilled"
                textSize="sm"
                onClick={showNumberHandler}
              />
            </div>
            <LinkButton textSize={"sm"} text="NAPISZ WIADOMOŚĆ" />
          </div>
          <button
            className="bg-white px-4 py-2 rounded hover:bg-lightBlue z-20"
            onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </div>

        <GalleryCarousel images={images} />
      </div>
    </ReactModal>
  );
}

export default GalleryModal;
