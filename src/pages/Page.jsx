import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  Articles,
  Calculate,
  Card,
  ContactMain,
  ContactSide,
  Description,
  DetailsList,
  Form,
  Gallery,
  Location,
  Offers,
  Share,
} from "../containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button, LinkButton } from "../components";
import Modal from "../components/Modal";
import MapModal from "../components/MapModal";
import GalleryModal from "../containers/GalleryModal";
import * as galleryImages from "../assets/gallery";

const imagesCount = Object.keys(galleryImages).length;
const images = Array.from(
  { length: imagesCount },
  (_, index) => galleryImages[`img${index + 1}`]
);

const Details = () => {
  const detailsListData = [
    {
      title: "Lokalizacja",
      description: "Warszawa, Żoliborz, mazowieckie",
    },
    {
      title: "Numer referencyjny",
      description: "gratka-15",
    },
    {
      title: "Kanalizacja",
      description: "miejska",
    },
    {
      title: "Ogrodzenie działki",
      description: "inne",
    },
    {
      title: "Droga dojazdowa",
      description: "asfaltowa",
    },
    {
      title: "Miejsce parkingowe",
      description: "w garażu",
    },
    {
      title: "Liczba pięter w budynku",
      description: "2",
    },
    {
      title: "Rok budowy",
      description: "1958",
    },
    {
      title: "Forma własności",
      description: "własność",
    },
    {
      title: "Liczba pokoi",
      description: "4",
    },
    {
      title: "Powierzchnia działki w m2",
      description: "201 m²",
    },
    {
      title: "Powierzchnia użytkowa w m2",
      description: "186 m²",
    },
    {
      title: "Powierzchnia w m2",
      description: "186 m²",
    },
    {
      title: "Typ budynku",
      description: "inny",
    },
    {
      title: "Liczba miejsc parkingowych",
      description: "2",
    },
    {
      title: "Media",
      description: "prąd, internet, telewizja kablowa",
    },
    {
      title: "Ogrzewanie i energia",
      description: "CO miejskie",
    },
    {
      title: "Możliwy kontakt w języku",
      description: "angielskim, niemieckim, rosyjskim",
    },
    {
      title: "Zaktualizowane",
      description: "przedwczoraj",
    },
    {
      title: "Dodane",
      description: "3 dni temu",
    },
  ];
  const offersData = [
    {
      location: "Warszawa, Wilanów, mazowieckie",
      title: "Dom Warszawa Wilanów Niski, ul. Wiertnicza 115c",
      price: "2 600 000",
    },
  ];
  const articlesData = [
    {
      location: "Gratka Blog",
      title:
        "Sprzedaż nieruchomości po rozwodzie bez podziału majątku - co trzeba wiedzieć?",
    },
    {
      location: "Gratka Blog",
      title:
        "Jak opróżnić mieszkanie z niechcianego lokatora? Eksmisja z mieszkania",
    },
    {
      location: "Gratka Blog",
      title:
        "Wynajem własnego mieszkania na wakacje - wszystko, co musisz wiedzieć",
    },
    {
      location: "Gratka Blog",
      title: "Działka leśna - czy można na niej budować dom?",
    },
    {
      location: "Gratka Blog",
      title:
        "Jak przelać pieniądze przy zakupie mieszkania? Przewodnik po bezpiecznej transakcji",
    },
    {
      location: "Gratka Blog",
      title: "Mieszkanie z rynku wtórnego - na co trzeba uważać przy zakupie?",
    },
  ];

  const [showForm, setShowForm] = useState(false);

  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const closeGalleryModal = () => {
    setShowGalleryModal(false);
  };

  const [showVideoModal, setShowVideoModal] = useState(false);
  const closeDemoModal = () => {
    setShowVideoModal(false);
  };

  const [showMapModal, setShowMapModal] = useState(false);
  const closeDemoModal1 = () => {
    setShowMapModal(false);
  };

  return (
    <>
      <div className="w-full bg-zinc-100 font-primary pb-8">
        <div className="max-w-[1200px] mx-auto flex items-center gap-x-3 py-4 pl-2 text-sm overflow-auto whitespace-nowrap text-zinc-600">
          <a href="#" className="hover:text-lightBlue">
            Gratka.pl
          </a>
          <FontAwesomeIcon size="xs" icon={faChevronRight} />
          <a href="#" className="hover:text-lightBlue">
            Nieruchomości Warszawa
          </a>
          <FontAwesomeIcon size="xs" icon={faChevronRight} />
          <a href="#" className="hover:text-lightBlue">
            Domy Warszawa
          </a>
        </div>
        <Card
          specialPadding="p-2"
          className=" hidden lg:flex lg:sticky lg:top-0 lg:z-10">
          <LinkButton
            icon={faChevronLeft}
            text="wróć"
            type="darkBlueOutlined"
            specialPadding="px-3 py-2"
            iconSize="lg"
            className="w-1/3"
          />
        </Card>

        {/* Galler Modal */}
        <GalleryModal
          images={images}
          showModal={showGalleryModal}
          handleCloseModal={() => closeGalleryModal()}
        />

        {/* Video Modal */}
        <Modal showModal={showVideoModal} handleCloseModal={closeDemoModal} />

        {/* Map Modal */}
        <MapModal showModal={showMapModal} handleCloseModal={closeDemoModal1} />

        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-x-4 gap-y-4 lg:px-2 lg:py-3">
          <div className="flex flex-col gap-y-4 col-span-8 lg:col-span-12">
            <Card>
              <div className="flex gap-x-4 items-center">
                <LinkButton
                  icon={faChevronLeft}
                  type="darkBlueOutlined"
                  specialPadding="px-3 py-2"
                  iconSize="lg"
                  className="lg:hidden"
                />
                <div>
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
                  <p className="text-lg mt-1 mb-3">
                    Dom Warszawa Żoliborz, ul. Kaniowska
                  </p>
                  <div className="flex gap-x-10 text-lg sm:gap-x-0">
                    <span className="font-bold">3 850 000 zł</span>
                    <span className="text-zinc-600">
                      20 698,92 zł/m<sup>2</sup>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card specialPadding="p-2">
              <Gallery
                showVideo={() => setShowVideoModal(true)}
                showGalleryModal={() => setShowGalleryModal(true)}
                images={images}
                imagesCount={imagesCount}
              />
            </Card>
            <Card title="Szczegóły ogłoszenia">
              <DetailsList detailsListData={detailsListData} />
            </Card>
            <Card title="Opis ogłoszenia">
              <Description />
            </Card>
            <Card>
              <Share />
            </Card>
            <Card title="Lokalizacja" titleClass="lg:text-center">
              <Location showMap={() => setShowMapModal(true)} />
            </Card>
            <Card title="Skontaktuj się" className="block lg:hidden">
              <ContactMain />
            </Card>
            <Form showForm={showForm} setShowForm={setShowForm} />
          </div>
          <div className="flex flex-col col-span-4 gap-y-4 lg:col-span-12 lg:flex-col-reverse">
            <Card title="Skontaktuj się" titleClass="text-center">
              <ContactSide setShowForm={setShowForm} />
            </Card>
            <Card title="Oblicz ratę" titleClass="text-center">
              <Calculate />
            </Card>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto my-4 grid grid-cols-12 gap-y-4 lg:px-2 lg:py-3">
          <Card
            title="Pozostałe oferty ogłoszeniodawcy"
            className="col-span-8 lg:col-span-12">
            <Offers offersData={offersData} />
          </Card>
          <Card title="Zerknij też na artykuły" className="col-span-12">
            <Articles articlesData={articlesData} />
          </Card>
        </div>
      </div>
      <div className="w-full hidden lg:flex lg:fixed bottom-0 right-0 p-2 bg-white gap-2">
        <LinkButton
          className="w-1/2"
          icon={faPhone}
          iconSize="xl"
          type="lightGreenFilled"
          href="tel:+48 668 580 101"
        />
        <Button
          className="w-1/2"
          icon={faEnvelope}
          iconSize="xl"
          type="lightBlueFilled"
          onClick={() => setShowForm(true)}
        />
      </div>
    </>
  );
};

export default Details;
