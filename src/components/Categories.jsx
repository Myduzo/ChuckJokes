import React from "react";
import Card from "./Card";
import "./Categories.css";
import arrowDown from "../assets/assets_Homework_Front-End_01/path-copy-7@2x.png";

const Categories = () => {
  return (
    <div className="category-bg">
      <div className="container">
        <div className="category">
          <div className="gridContainer">
            <a href="adult-jokes" className="btn" id="btn1">
              ADULT JOKES
            </a>
            <a href="dad-jokes" className="btn" id="btn2">
              DAD JOKES
            </a>
            <a href="christmas-jokes" className="btn" id="btn3">
              CHRISTMAS JOKES
            </a>
            <a href="job-jokes" className="btn" id="btn4">
              JOB JOKES
            </a>
            <a href="birthday-jokes" className="btn" id="btn5">
              BIRTHDAY JOKES
            </a>
            <a href="social-jokes" className="btn" id="btn6">
              SOCIAL JOKES
            </a>
            <a href="puns" className="btn" id="btn7">
              PUNS
            </a>
            <a href="view-all" className="btn" id="btn8">
              VIEW ALL <img src={arrowDown} alt="view all" />
            </a>
          </div>
          <div className="line"></div>
          <div className="jokes">SOCIAL JOKES</div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Categories;
