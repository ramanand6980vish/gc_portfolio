import { useEffect, useState } from "react";
import "../cssFiles/imageCarousel.css";

import pic01 from "../assets/gallery/pic01.jpeg";
import pic02 from "../assets/gallery/pic02.jpeg";
import pic03 from "../assets/gallery/pic03.jpeg";
import pic04 from "../assets/gallery/pic04.jpeg";
import pic05 from "../assets/gallery/pic05.jpeg";
import pic06 from "../assets/gallery/pic06.jpeg";
import pic07 from "../assets/gallery/pic07.jpeg";

const images = [
  { src: pic01, alt: "Global Construction image 1" },
  { src: pic02, alt: "Global Construction image 2" },
  { src: pic03, alt: "Global Construction image 3" },
  { src: pic04, alt: "Global Construction image 4" },
  { src: pic05, alt: "Global Construction image 5" },
  { src: pic06, alt: "Global Construction image 6" },
  { src: pic07, alt: "Global Construction image 7" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Don't start an auto-slider when only one image is available.
    if (images.length <= 1) return;

    const sliderInterval = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, []);

  const showPrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
  };

  return (
    <section className="section soft-section">
      <h2 className="section-title">
        <span>A Glimpse of Our Work</span>
      </h2>

      <div className="gc-image-carousel" aria-label="Global Construction gallery">
        <div className="gc-carousel-frame">
          {images.map((image, index) => (
            <div
              className={`gc-carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              key={image.src}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gc-carousel-image"
              />
            </div>
          ))}

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="gc-carousel-arrow gc-carousel-prev"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <button
                type="button"
                className="gc-carousel-arrow gc-carousel-next"
                onClick={showNext}
                aria-label="Next image"
              >
                &#10095;
              </button>

              <div className="gc-carousel-indicators">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={`gc-carousel-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
