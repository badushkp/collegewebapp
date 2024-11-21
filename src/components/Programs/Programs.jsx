import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program_1.png";
import program_2 from "../../assets/program_2.png";
import program_3 from "../../assets/program_3.png";
import program_icon_1 from "../../assets/program_icon_1.png";
import program_icon_2 from "../../assets/program_icon_2.png";
import program_icon_3 from "../../assets/program_icon_3.png";

const Programs = () => {
  // ---------------------------3 Images after the main---------------------
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} />
        <div className="caption">
          <img src={program_icon_1} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} />
        <div className="caption">
          <img src={program_icon_2} />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} />
        <div className="caption">
          <img src={program_icon_3} />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
