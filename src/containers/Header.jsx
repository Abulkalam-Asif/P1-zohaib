import React, { useEffect, useState } from "react";
import gratka_logo from "../assets/gratka_logo.svg";
import onet_logo from "../assets/onet_logo.svg";
import { Navbar } from ".";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [sidebar, setSidebar] = useState("hidden");

  useEffect(() => {
    if (sidebar === "hidden") {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  }, [sidebar]);

  return (
    <>
      <header className="w-full bg-white font-primary">
        <div className="max-w-[1200px] mx-auto px-2.5 flex items-center justify-between lg:py-2">
          <div className="flex items-center gap-x-6 lg:gap-x-2">
            <a href="https://gratka.pl/">
              <img
                width="100px"
                className="lg:w-20"
                src={gratka_logo}
                alt="Ogłoszenia Gratka.pl - oferty nieruchomości, ogłoszenia motoryzacyjne, oferty pracy i ogłoszenia pozostałe."
              />
            </a>
            <a href="https://www.onet.pl/?utm_source=gratka&utm_medium=logo&utm_campaign=barter_202003">
              <img
                width="82px"
                className="lg:w-16"
                src={onet_logo}
                alt="Onet.pl partner serwisu"
              />
            </a>
          </div>
          <div className="flex items-center">
            {sidebar === "visible" && (
              <div className="bg-black opacity-30 fixed top-0 right-0 w-full h-screen z-20"></div>
            )}
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <LinkButton
              href="#"
              text="DODAJ OGŁOSZENIE"
              icon={faPlus}
              textSize="sm"
              iconSize="lg"
              className="ml-4"
              textSizeClassName="sm:text-xxs"
              hideIconOnSm={true}
            />
            <button
              className="hidden ml-4 px-4 lg:inline-block sm:m-0"
              onClick={() => {
                sidebar === "hidden"
                  ? setSidebar("visible")
                  : setSidebar("hidden");
              }}>
              <FontAwesomeIcon
                icon={faBars}
                className="text-darkBlue text-xl"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
