import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";

const Testimonials = () => {
  // useRef is used to get the ul
  const slider = useRef();
  let tx = 0;

  //  For sliding the images forward.
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  //   For sliding the images Backward.
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img className="next-btn" src={next_icon} onClick={slideForward} />
      <img className="back-btn" src={back_icon} onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} />
                <div>
                  <h3>Emma Mary</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Engineering offers the opportunity to solve real-world problems
                using logic, creativity, and innovative thinking. Whether
                designing a bridge, creating a medical device, or developing
                sustainable energy solutions, engineers tackle challenges that
                improve people's lives.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} />
                <div>
                  <h3>William Jackson</h3>
                  <span>Transelvania, UK</span>
                </div>
              </div>
              <p>
                Engineering offers the opportunity to solve real-world problems
                using logic, creativity, and innovative thinking. Whether
                designing a bridge, creating a medical device, or developing
                sustainable energy solutions, engineers tackle challenges that
                improve people's lives.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} />
                <div>
                  <h3>Lucia Joseph</h3>
                  <span>EduCity,India</span>
                </div>
              </div>
              <p>
                Engineering offers the opportunity to solve real-world problems
                using logic, creativity, and innovative thinking. Whether
                designing a bridge, creating a medical device, or developing
                sustainable energy solutions, engineers tackle challenges that
                improve people's lives.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} />
                <div>
                  <h3>Ahmed Khalid</h3>
                  <span>UI-Techonlogies,France</span>
                </div>
              </div>
              <p>
                Engineering offers the opportunity to solve real-world problems
                using logic, creativity, and innovative thinking. Whether
                designing a bridge, creating a medical device, or developing
                sustainable energy solutions, engineers tackle challenges that
                improve people's lives.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
