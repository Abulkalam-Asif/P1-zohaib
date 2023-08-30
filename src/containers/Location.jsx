import React from "react";
import map from "../assets/map.svg";
import { Button } from "../components";

const Location = ({ showMap }) => {
  return (
    <div className="grid grid-cols-2 mt-4 gap-y-4 lg:flex lg:flex-col items-center">
      <div className="col-start-2 row-span-2 justify-self-end">
        <button onClick={showMap}>
          <img src={map} alt="map" />
        </button>
      </div>
      <div className="row-start-1 text-sm">
        <p>ul. Kaniowska</p>
        <p>Warszawa,</p>
        <p>mazowieckie</p>
      </div>
      <div>
        <Button
          text="ZOBACZ NA MAPIE"
          type="darkBlueOutlined"
          specialPadding="px-6 py-2"
        />
      </div>
    </div>
  );
};

export default Location;
