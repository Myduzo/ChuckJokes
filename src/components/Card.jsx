import React from "react";
import "./Card.css";
import light from "../assets/assets_Homework_Front-End_01/green-light-copy-2@2x.png";
import stats from "../assets/assets_Homework_Front-End_01/path-copy-2@2x.png";
import arrowDown from "../assets/assets_Homework_Front-End_01/path-copy-7@2x.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="cardTitle">
            <img src={light} alt="light" />
            <h4>LAWYER JOKE</h4>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam
            lorem. Lorem ipsum d lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div
            className="stats"
            onClick={() => {
              navigate("/stats");
            }}
          >
            <a href="stats">
              SEE STATS <img src={stats} alt="stats" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <img src={light} alt="light" />
            <h4>LAWYER JOKE</h4>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam
            lorem. Lorem ipsum d lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div
            className="stats"
            onClick={() => {
              navigate("/stats");
            }}
          >
            <a href="stats">
              SEE STATS <img src={stats} alt="stats" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <img src={light} alt="light" />
            <h4>LAWYER JOKE</h4>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam
            lorem. Lorem ipsum d lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div
            className="stats"
            onClick={() => {
              navigate("/stats");
            }}
          >
            <a href="stats">
              SEE STATS <img src={stats} alt="stats" />
            </a>
          </div>
        </div>
      </div>
      <div className="viewBtn">
        <a href="view-more" className="viewMore">
          VIEW MORE <img src={arrowDown} alt="view more" />
        </a>
      </div>
    </>
  );
};

export default Card;
