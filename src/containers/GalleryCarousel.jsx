import { Carousel } from "flowbite-react";

export default function GalleryCarousel({ images }) {
  return (
    <Carousel
      leftControl={false}
      slide={false}
      className="h-full w-auto m-10 bg-black md:m-0">
      {images.map((image, index) => {
        return (
          <img
            className="h-full w-auto md:w-full md:h-auto"
            key={index}
            alt="Carousel image"
            src={image}
          />
        );
      })}
    </Carousel>
  );
}
