import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useStore } from "../store";
import "../styles/SwiperContainer.scss";
import { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

function SwiperContainer() {
  const { slidesId, slides, setSelectedSlides, selectedSlides } = useStore();
  const { width } = useWindowSize();

  useEffect(() => {
    const newSelectedSlides = slides[slidesId - 1];

    setSelectedSlides(newSelectedSlides);
  }, [slidesId]);

  return (
    <div className="slides">
      <button className="slides__arrow slides__arrow-left"></button>
      <Swiper
        navigation={{
          nextEl: ".slides__arrow-right",
          prevEl: ".slides__arrow-left",
        }}
        modules={[Navigation]}
        className="swiper"
        slidesPerView={width > 800 ? 3 : 1.5}>
        {selectedSlides.dates.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slider">
                <h2 className="slider__year">{slide.year}</h2>
                <p className="slider__text">{slide.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="slides__arrow slides__arrow-right"></button>
    </div>
  );
}

export default SwiperContainer;
