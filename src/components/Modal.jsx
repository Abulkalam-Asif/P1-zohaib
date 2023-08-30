import React from "react";
import ReactModal from "react-modal";
import "../app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Modal({ showModal, handleCloseModal }) {
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      className="Modal "
      ariaHideApp={false}
      appElement={document.getElementById("root")}
      overlayClassName="Overlay">
      <button
        className="absolute right-0 top-0 bg-white px-4 py-2 rounded hover:bg-lightBlue"
        onClick={handleCloseModal}>
        <FontAwesomeIcon icon={faX} size="lg" />
      </button>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/bABch5Gszd8?si=MVYEAPDiCiemTrh8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </ReactModal>
  );
}

export default Modal;
