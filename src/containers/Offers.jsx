import React from "react";
import { Offer } from "../components";
import * as offerImagesImport from "../assets/offers";

const offerImagesCount = Object.keys(offerImagesImport).length;
const offerImages = Array.from(
  { length: offerImagesCount },
  (_, index) => offerImagesImport[`offer${index + 1}`]
);

const Offers = ({ offersData }) => {
  return (
    <>
      <div className="flex mt-4 gap-x-4 flex-nowrap overflow-x-auto">
        {offersData.map((offer, index) => (
          <Offer
            key={index}
            image={offerImages[index] && offerImages[index]}
            location={offer.location}
            title={offer.title}
            price={offer.price}
          />
        ))}
      </div>
    </>
  );
};

export default Offers;
