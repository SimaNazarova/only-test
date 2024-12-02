import React, { useEffect, useState } from "react";
import "../styles/RotatingCircle.scss";
import gsap from "gsap";
import { useStore } from "../store";
import useWindowSize from "../hooks/useWindowSize.ts";
import { switchByBullet } from "../utils/utils.ts";

const RotatingCircle: React.FC = () => {
  const { slidesId, slides, setSlidesId } = useStore();
  const { width } = useWindowSize();

  const [translateX, setTranslateX] = useState<number>(265);
  const [currentBtn, setCurrentBtn] = useState<number | null>(null);

  useEffect(() => {
    if (width <= 928) {
      setTranslateX(180);
    } else {
      setTranslateX(265);
    }
  }, [width]);

  useEffect(() => {
    const angle = 360 / slides.length;
    const rotation = -angle * slidesId - 50;

    setCurrentBtn(null);

    gsap.to(".circle__container", {
      rotation: rotation,
      transformOrigin: "center center",
      ease: "sine.inOut",
      duration: 1,
    });

    slides.forEach((button) => {
      const buttonAngle = (360 / slides.length) * button.id + rotation;
      gsap.to(`.circle__button-text-${button.id}`, {
        rotation: -buttonAngle,
        transformOrigin: "center center",
        ease: "sine.inOut",
        duration: 1,
        onComplete: () => {
          if (button.id === slidesId) {
            setCurrentBtn(slidesId);
          }
        },
      });
    });
  }, [slidesId, slides.length]);

  return (
    <div className="circle__wrapper">
      <div className="circle__background"></div>
      <div className="circle__container">
        {slides.map((button) => (
          <button
            type="button"
            key={button.id}
            className={`circle__button ${slidesId === button.id && "circle__button-selected"}`}
            onClick={() => switchByBullet(button.id, setSlidesId)}
            style={{
              transform: `rotate(${(360 / slides.length) * button.id}deg) translateX(${translateX}px)`,
            }}>
            <div
              className={`circle__button-text circle__button-text-${button.id}`}>
              <p className="circle__button-number">{button.id}</p>
              <p
                className={`circle__button-title ${currentBtn === button.id && "circle__button-title-selected"}`}>
                {button.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RotatingCircle;
