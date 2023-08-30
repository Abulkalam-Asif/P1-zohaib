import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const Description = () => {
  const buttonRef = useRef();
  const [isDescOpened, setIsDescOpened] = useState(false);

  useEffect(() => {
    if (isDescOpened) {
      buttonRef.current.classList.add("description_opened");
    } else {
      buttonRef.current.classList.remove("description_opened");
    }
  }, [isDescOpened]);

  return (
    <>
      <div>
        <p
          className={`overflow-y-hidden leading-7 my-4 transition-all duration-300 ${
            isDescOpened ? "h-[700px]" : "h-60"
          }`}>
          Mam przyjemność zaoferować miłośnikom zielonego Żoliborza wyjątkową
          nieruchomość w sercu Parku przy Cytadeli. <br />
          Segment środkowy z ogródkiem od frontu i od strony parku zapewnia
          poczucie bycia wśród zieleni i przyrody zaledwie 5 km od centrum
          miasta. <br />
          Idealne miejsce w sąsiedztwie Parku Żeromskiego, PL. Wilsona z
          dostępem do kumnikacji i atrakcji życia społecznego typu kino,
          restauracje, sklepy, metro. <br />
          Nieruchomość ma 3 poziomy:
          <br />- przyziemie (62 m2) z garażem na 2 auta i zaplecze gospodarcze
          z pralnią i spiżarnią;
          <br />* parter : <br />- wiatrołap: <br />- przestronny hol wejściowy
          : 2,4 m x 3,25 m;
          <br />- kuchnia od frontu; 2,9 m x 2 m;
          <br />- łazienka w prysznicem; 2,4 m x 1,5 m;
          <br />- salon z tarasem w podcieniu i wyjściem do ogrodu; 6,4 m x 4,1
          m<br />- pokój gościnny; 2m x 2,4 m<br />
          Piętro :<br />- hol: 2,3 m x 2,2 m<br />- kuchnia; 2,2 m x 3 m<br />-
          łazienka z prysznicem; 2,2 m x 2 m<br />- pokój dziecinny; 2,5 m x 2,2
          m<br />- salon ( 25 m2) z tarasem ( 7 m2) również w podcieniu i
          wyjątkowym widokiem na zieleń Cytadeli; 6,4 m x 4,1 m<br />
          Nieruchomość stwarza możliwości nowej aranżacji użytkowania według
          potrzeb nowego właściciela. <br />
          Stan prawny: własność. <br />
          Zapraszam na prezentację po uzgodnieniu terminu i do współpracy.
        </p>
        <button
          ref={buttonRef}
          onClick={() => setIsDescOpened((prevState) => !prevState)}
          className="description_btn relative w-full py-2 space-x-3 text-darkBlue hover:text-lightBlue">
          <span className="uppercase text-sm font-bold">
            {isDescOpened ? "Zobacz krótszy opis" : "Zobacz cały opis"}
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-200 ${
              isDescOpened ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Description;
