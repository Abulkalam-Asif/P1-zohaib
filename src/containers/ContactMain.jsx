import React, { useEffect, useRef, useState } from "react";
import contact_img from "../assets/contact_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components";

const ContactMain = () => {
  const numberRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsDesktop(false);
    }
  }, []);

  const showNumberHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.display = "none";
    numberRef.current.style.width = "auto";
  };
  return (
    <div className="mt-3 space-y-4">
      <div className="text-zinc-600">
        <span>Numer ogłoszenia:</span>{" "}
        <span className="font-bold">31501829</span>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="border-2 border-zinc-200 px-8 w-48">
          <img src={contact_img} alt="a woman with a bag" />
        </div>
        <div className="flex flex-col gap-y-2">
          <a
            href="https://aleksandra-michalska-doradztwo-inwestycyjne.gratka.pl/"
            className="uppercase text-darkBlue font-bold">
            ALEKSANDRA MICHALSKA DORADZTWO INWESTYCYJNE NIERUCHOMOŚCI
          </a>
          <h2 className="text-lg">Aleksandra Maria Michalska</h2>
          <div className="flex items-center gap-x-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="sm"
              className="text-darkBlue"
            />
            <span className="text-sm font-bold">
              Mokotowska 14/701, 00-561 Warszawa
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">tel.</span>{" "}
            <span
              ref={numberRef}
              className="text-lg font-extrabold w-12 whitespace-nowrap overflow-x-hidden text-ellipsis">
              +48 668 580 101
            </span>
            <Button
              text={isDesktop ? "POKAŻ NUMER" : "ZADZWOŃ"}
              type="darkGreenFilled"
              textSize="sm"
              onClick={showNumberHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
