import React from "react";
import "./Main.css";
import dark_arrow from "../../assets/dark_arrow.png";

const Main = () => {
  return (
    // -------------------------Main-content-------------------------
    <div className="main container">
      <div className="main-text">
        <h1>We Ensure Better education for a better world.</h1>
        <p>
          It emphasizes the unity and interdependence of human society,
          developing a sense of self and appreciation of cultural diversity,
          affirmation of social justice and human rights, as well as building
          peace and actions for a sustainable future at different times and
          places.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Main;
