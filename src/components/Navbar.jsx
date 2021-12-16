import React from "react";
import "./Navbar.css";
import user from "../assets/assets_Homework_Front-End_01/shape@2x.png";
import arrow from "../assets/assets_Homework_Front-End_01/path_2@2x.png";
import arrowUp from "../assets/assets_Homework_Front-End_01/path_2.png";

const Navbar = () => {
  return (
    <nav className="navbarItems">
      <div className="container">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="navMenu">
          <a className="link" href="so-funktioniert's">
            SO FUNKTIONIERT'S
          </a>
          <a className="link" href="sonderangebote">
            SONDERANGEBOTE
          </a>
          <div className="dropDown">
            <button className="link" href="mein-bereich">
              <img className="userIcon" src={user} alt="user" /> MEIN BEREICH{" "}
              <img className="userIcon" src={arrow} alt="user" />
            </button>
            <div className="dropDownMenu">
              <img src={arrowUp} alt="arrow" />
              <a href="published" className="text">
                My published jokes
              </a>
              <br />
              <a href="saves" className="text">
                My saves jokes
              </a>
              <br />
              <a href="info" className="text">
                Account Information
              </a>
              <br />
              <a href="publish" className="text" id="t1">
                Publish new joke
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
