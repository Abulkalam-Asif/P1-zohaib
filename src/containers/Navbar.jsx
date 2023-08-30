import React from "react";
import { LinkButton, Navitem } from "../components";
import {
  faChevronDown,
  faUserPlus,
  faUser,
  faXmark,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <>
      <nav
        className={`relative lg:fixed lg:top-0 ${
          sidebar === "visible" ? "lg:right-0" : "lg:-right-full"
        } lg:transition-all lg:duration-500 lg:ease-in-out lg:bg-white lg:w-4/5 lg:max-w-[480px] lg:pt-2 lg:pb-20 lg:min-h-screen lg:max-h-screen lg:overflow-y-auto lg:shadow-[0_0_30px_0_rgba(0,0,0,0.5)] lg:z-30`}>
        {/* The div having close-sidebar button */}
        <div className="hidden lg:flex lg:justify-end lg:px-6">
          <button
            onClick={() => {
              sidebar === "hidden"
                ? setSidebar("visible")
                : setSidebar("hidden");
            }}>
            <FontAwesomeIcon icon={faXmark} className="text-3xl" />
          </button>
        </div>
        {/* This is an additional button which is displayed only in sidebar */}
        <div className="hidden lg:block lg:my-6 lg:px-4">
          <LinkButton
            href="#"
            text="Dodaj ogłoszenie"
            icon={faPlusCircle}
            textSize="sm"
            iconSize="lg"
            type="extraLightBlueFilled"
            className="py-3"
          />
        </div>
        <div className="flex lg:flex-col-reverse">
          <ul className="flex lg:flex-col lg:px-6">
            <Navitem text="Kredyty" isLink={true} />
            <Navitem text="Blog" isLink={true} />
            <Navitem
              text="Cennik"
              iconAfter={faChevronDown}
              dropdownContent={[
                { text: "Klient indywidualny", href: "#" },
                { text: "Klient biznesowy", href: "#" },
              ]}
            />
            <Navitem
              text="Firmy"
              iconAfter={faChevronDown}
              dropdownContent={[
                { text: "Biura nieruchomości", href: "#" },
                { text: "Deweloperzy nieruchomości", href: "#" },
                {
                  text: "Instytucje i stowarzyszenia nieruchomości",
                  href: "#",
                },
                { text: "Komisy samochodowe", href: "#" },
                { text: "Salony samochodowe", href: "#" },
                { text: "Sklepy motoryzacyjne", href: "#" },
              ]}
            />
          </ul>
          <hr className="hidden lg:block lg:my-4" />
          <ul className="lg:px-6">
            <Navitem text="Zaloguj się" iconBefore={faUser} isLink={true} />
            <Navitem
              text="Załóż konto"
              iconBefore={faUserPlus}
              isLink={true}
              className="hidden lg:block"
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
