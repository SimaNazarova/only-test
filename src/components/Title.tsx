import React from "react";
import "../styles/Title.scss";

const Title: React.FC = () => {
  return (
    <div className="title__container">
      <div className="title__left-border"></div>
      <h1 className="title__text">Исторические даты</h1>
    </div>
  );
};
export default Title;
