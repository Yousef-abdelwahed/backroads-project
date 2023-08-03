import React from "react";
import "./Title.css";
const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h1 className="title text-center">
        {title}
        <span>{subTitle}</span>
      </h1>
    </div>
  );
};

export default Title;
