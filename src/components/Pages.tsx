import React from "react";
import "../styles/Pages.scss";
import SwiperContainer from "./SwiperContainer";
import { useStore } from "../store";
import gsap from "gsap";
import { switchByBullet } from "../utils/utils";

const Pages: React.FC = () => {
  const { slidesId, slides, setSlidesId } = useStore();

  function counter(direction: string): void {
    gsap.to(".slider", {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        if (direction === "left") {
          setSlidesId(slidesId - 1);
        } else {
          setSlidesId(slidesId + 1);
        }
        gsap.fromTo(".slider", { y: 25 }, { opacity: 1, duration: 0.5, y: 0 });
      },
    });
  }

  return (
    <div className="pages">
      <div className="pages__content">
        <p className="pages__page">
          0{slidesId}/0{slides.length}
        </p>
        <div className="pages__btns-container">
          <button
            className="pages__btn pages__btn_left"
            onClick={() => counter("left")}
            disabled={slidesId === 1}></button>
          <button
            className="pages__btn pages__btn_right"
            onClick={() => counter("right")}
            disabled={slidesId === slides.length}></button>
          <ul className="pages__ul">
            {slides.map((bullet, index) => {
              return (
                <li
                  onClick={() => switchByBullet(index + 1, setSlidesId)}
                  className={`${"pages__li"}${
                    bullet.id === slidesId ? " active" : ""
                  }`}
                  key={bullet.id}></li>
              );
            })}
          </ul>
        </div>
      </div>
      <SwiperContainer />
    </div>
  );
};
export default Pages;
