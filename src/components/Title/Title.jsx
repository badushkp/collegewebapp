import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    //Title that can be passed as props to all the components
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
