import React, { useEffect, useState } from "react";
import { Button, RangeSlider } from "../components";
import ing_logo from "../assets/ing_logo.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Calculate = () => {
  const [sliderValue, setSliderValue] = useState(30);
  // const buttonRef = useRef();
  const [isDescOpened, setIsDescOpened] = useState(false);

  const sliderInputHandler = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div className="mt-3">
        <div className="block lg:flex lg:items-center lg:justify-between sm:block">
          <div className="text-2xl text-darkBlue font-bold text-center">
            <span>3 850 000 zł</span>
          </div>
          <div className="flex items-center justify-between px-9 mt-4 lg:gap-x-4 sm:gap-x-0">
            <p>Okres spłaty</p>
            <div className="border-1 border-zinc-400 rounded p-4 font-bold">
              <input
                type="number"
                className="w-12 mr-2"
                value={sliderValue}
                onInput={sliderInputHandler}
                min="1"
                max="35"
                step="1"
              />
              <span>lat</span>
            </div>
          </div>
        </div>
        <RangeSlider value={sliderValue} onInput={sliderInputHandler} />
        <div className="flex flex-col items-center mt-6 lg:flex-row lg:justify-between sm:flex-col">
          <div className="flex flex-col items-center lg:items-start sm:items-center">
            <Button
              text="OBLICZ RATĘ"
              type="darkBlueOutlined"
              specialPadding="px-10 py-2"
            />
            <p className="text-sm mt-1 mb-8">RRSO 9.23%</p>
          </div>
          <a
            href="http://clk.tradedoubler.com/click?p=122963&a=3143100&g=25160290&url=https://www.ing.pl/lp/kredyt-hipoteczny-widget"
            target="_blank">
            <img src={ing_logo} className="w-24" alt="ING Logo" />
          </a>
        </div>
        <div className="mt-5">
          <div
            className={`bg-extraLightBlue transition-height duration-300 overflow-y-auto ${
              isDescOpened ? "h-60" : "h-0"
            }`}>
            <p className="p-4 text-zinc-600">
              Rzeczywista Roczna Stopa Oprocentowania (RRSO) wynosi 9.23%, dla
              kredytu budowlano hipotecznego w ofercie Wakacyjna oferta - łatwy
              start z oprocentowaniem zmiennym, przy następujących założeniach:
              okres kredytowania 28 lat i 9 miesięcy (345 miesięcy), całkowita
              kwota kredytu zabezpieczonego hipoteką (bez kredytowanych kosztów)
              300 000,00 zł, całkowita kwota do zapłaty 850 324,79 zł,
              oprocentowanie zmienne 8,59156% w tym: wskaźnik referencyjny WIRON
              1M Stopa Składana 6,21156% oraz marża 2,38%, całkowity koszt
              kredytu 550 324,79 zł w tym: prowizja 0.00 zł, odsetki 535 773,93
              zł, podatek od czynności cywilnoprawnych (PCC) 19,00 zł,
              ubezpieczenie nieruchomości od ognia i innych zdarzeń losowych
              zawarte za pośrednictwem banku 10 310,40 zł (przy zabezpieczeniu
              na jednej nieruchomości, na cały okres kredytowania), opłata za
              usługę wyceny nieruchomości zlecanej przez bank 462,00 zł (dla
              nieruchomości stanowiącej mieszkanie), opłata za prowadzenie konta
              Direct 0,00 zł, opłata za posiadanie systemu bankowości
              internetowej 0,00 zł; koszt przelewu przychodzącego i wychodzącego
              wykonanego w systemie bankowości internetowej w wysokości 0,00 zł,
              ubezpieczenia spłaty kredytu Opcja Życie Plus 3 759,46 zł (w
              okresie 3 lat od daty zawarcia umowy), 333 miesięczne uśrednione
              raty kapitałowo-odsetkowych po 2 348,15 zł. Kredyt wymaga
              zabezpieczenia w wysokości minimum 450 000,00 zł. Kalkulacja
              została dokonana na dzień 2023-08-07 na reprezentatywnym
              przykładzie. Zmienne oprocentowanie niesie ze sobą ryzyko wzrostu
              wysokości raty, a tym samym wysokości kwoty zadłużenia.
            </p>
          </div>
          <Button
            text={!isDescOpened ? "ZOBACZ KOSZTY KREDYTU" : "ZWIŃ"}
            textSize="sm"
            isHover={false}
            icon={faChevronDown}
            iconClass={`transition-transform duration-200 ${
              isDescOpened ? "rotate-180" : "rotate-0"
            }`}
            className="flex-row-reverse w-full"
            type="extraLightBlueFilled"
            specialPadding="py-3"
            onClick={() => {
              setIsDescOpened((prevState) => !prevState);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Calculate;
