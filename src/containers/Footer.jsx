import React from "react";
import onet from "../assets/footer/onet.svg";
import forbes from "../assets/footer/forbes.svg";
import business_insider from "../assets/footer/business_insider.svg";
import newsweek from "../assets/footer/newsweek.svg";
import { FooterLink } from "../components";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-white font-primary pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-center gap-x-8 items-center py-8 px-4 border-b-2 lg:flex-col lg:gap-y-4">
            <div className="font-bold">Serwisy partnerskie</div>
            <div className="flex justify-center items-center gap-x-8 gap-y-8 flex-wrap">
              <a target="_blank" href="https://www.onet.pl/">
                <img src={onet} alt="onet" />
              </a>
              <a target="_blank" href="https://www.forbes.pl/">
                <img src={forbes} alt="forbes" />
              </a>
              <a target="_blank" href="https://businessinsider.com.pl/">
                <img src={business_insider} alt="business_insider" />
              </a>
              <a target="_blank" href="https://www.newsweek.pl/">
                <img src={newsweek} alt="newsweek" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 py-8 px-4">
            <ul className="flex gap-x-2 flex-wrap lg:justify-center lg:gap-y-2">
              <FooterLink text="Ogłoszenia" href="/" />
              <FooterLink
                text="Blog"
                href="https://gratka.pl/blog/"
                dropdownContent={[
                  {
                    text: "Nieruchmości",
                    href: "#",
                  },
                  {
                    text: "Motoryzacja",
                    href: "#",
                  },
                  {
                    text: "Praca",
                    href: "#",
                  },
                  {
                    text: "Dla biznesu",
                    href: "#",
                  },
                ]}
              />
              <FooterLink
                text="Dla partnerów"
                href="https://gratka.pl/o-nas/"
                dropdownContent={[
                  {
                    text: "Deweloperzy, biura nieruchomości, instytucje",
                    href: "#",
                  },
                  {
                    text: "Autokomisy, sklepy z częściami",
                    href: "#",
                  },
                  {
                    text: "Pracodawcy, agencje hr",
                    href: "#",
                  },
                ]}
              />
              <FooterLink text="O nas" href="https://gratka.pl/mapa-serwisu" />
              <FooterLink
                text="Mapa serwisu"
                href="https://gratka.pl/mapa-serwisu"
              />
              <FooterLink
                text="Regulamin"
                href="https://gratka.pl/regulamin/"
              />
              <FooterLink
                text="Polityka prywatności"
                href="https://gratka.pl/polityka-prywatnosci"
              />
              <FooterLink text="Kontakt" href="https://gratka.pl/kontakt/" />
              <FooterLink
                text="Cennik ogłoszeń"
                href="https://gratka.pl/dodaj-ogloszenie/cennik"
              />
              <FooterLink text="Pomoc" href="https://gratka.pl/pomoc/" />
            </ul>
            <p className="text-xs lg:text-center">
              © 2000 - 2023 Grupa Morizon-Gratka Sp. z o.o. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
