import { create } from "zustand";
import { slides } from "./data";
import { produce } from "immer";
interface IDate {
  year: number;
  text: string;
}
interface ISlide {
  title: string;
  id: number;
  dates: IDate[];
}
interface StoreState {
  slidesId: number;
  setSlidesId: (slidesId: number) => void;
  slides: ISlide[];
  setSlides: (slides: ISlide[]) => void;
  selectedSlides: ISlide;
  setSelectedSlides: (selectedSlides: ISlide) => void;
}

export const useStore = create<StoreState>((set) => ({
  slidesId: 1,
  setSlidesId: (value) => {
    set(
      produce((state) => {
        state.slidesId = value;
      })
    );
  },
  slides: slides,
  setSlides: (value) => {
    set(
      produce((state) => {
        state.slides = value;
      })
    );
  },
  selectedSlides: slides[0],
  setSelectedSlides: (value) => {
    set(
      produce((state) => {
        state.selectedSlides = value;
      })
    );
  },
}));
