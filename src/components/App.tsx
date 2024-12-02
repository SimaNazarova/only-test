import React from "react";
import "../styles/App.scss";
import RotatingCircle from "./RotatingCircle.tsx";
import Title from "./Title.tsx";
import Pages from "./Pages.tsx";
import Years from "./Years.tsx";

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Title />
        <Years />
        <Pages />
        <RotatingCircle />
      </div>
    </div>
  );
}
