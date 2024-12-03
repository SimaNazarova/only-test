import React from "react";
import "../styles/Years.scss";
import { useStore } from "../store";
import gsap from "gsap";
import { useEffect } from "react";

const Years: React.FC = () => {
  const { selectedSlides } = useStore();

  useEffect(() => {
    const startYear = selectedSlides.dates[0].year;
    const endYear = selectedSlides.dates[selectedSlides.dates.length - 1].year;

    const yearTl = gsap.timeline();

    yearTl
      .to(".start", {
        innerText: startYear,
        duration: 1,
        snap: {
          innerText: 1,
        },
      })
      .to(
        ".end",
        {
          innerText: endYear,
          duration: 1,
          snap: {
            innerText: 1,
          },
        },
        "<"
      );
  }, [selectedSlides]);

  return (
    <div className="years">
      <p className="years__year start"></p>
      <p className="years__year end"></p>
    </div>
  );
};
export default Years;
