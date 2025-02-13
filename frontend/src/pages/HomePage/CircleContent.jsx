import React from "react";
import "./CircleContent.css";
import awardImage from "./assets/award.png"; 
import awardLeftImage from "./assets/award-left.png"; 
import awardRightImage from "./assets/award-right.png"; 
import awardBottomLeftImage from "./assets/award-bottom-left.png"; 
import awardBottomRightImage from "./assets/award-bottom-right.png"; 

const CircleContent = () => {
  return (
    <div className="circle-container">
      <div className="circle">
        <div className="content">
          <h1>
            Award Winning Software, <br />
            Customer Service & <br />
            Company Culture
          </h1>
          <button className="recognize-btn">Who Recognize Us</button>
        </div>

        <div className="image-container">
          <div className="award-top">
            <img src={awardImage} alt="Award Logo" />
          </div>
          <div className="award-left">
            <img src={awardLeftImage} alt="Left Award" />
          </div>
          <div className="award-bottom-left">
            <img src={awardBottomLeftImage} alt="Bottom Left Award" />
          </div>
          <div className="award-right">
            <img src={awardRightImage} alt="Right Award" />
          </div>
          <div className="award-bottom-right">
            <img src={awardBottomRightImage} alt="Bottom Right Award" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleContent;