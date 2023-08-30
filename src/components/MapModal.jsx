import React from "react";
import ReactModal from "react-modal";
import "../App.css";
import MapComponent from "./MapComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function MapModal({ showModal, handleCloseModal }) {
  const location = {
    latitude: 51.505,
    longitude: -0.09,
  };

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      className="Modal "
      ariaHideApp={false}
      appElement={document.getElementById("root")}
      overlayClassName="Overlay">
      <div className="App">
        <div className="p-2">
          <p>ul.Edwarda Stachury ,</p>
          <p>Łazieniec,</p>
          <p className="text-zinc-600 text-sm">kujawsko-pomorskie</p>
        </div>
        <button
          className="absolute right-2 top-2 bg-white px-4 py-2 rounded hover:bg-lightBlue"
          onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faX} size="lg" />
        </button>
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
    </ReactModal>
  );
}

export default MapModal;
