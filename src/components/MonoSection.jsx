import React from "react";
import "./MonoSection.css";
import like from "../assets/assets_Homework_Front-End_02/hand@2x.png";
import dislike from "../assets/assets_Homework_Front-End_02/hand-copy@2x.png";
import prev from "../assets/assets_Homework_Front-End_02/arrow-left-copy-2@2x.png";
import next from "../assets/assets_Homework_Front-End_02/arrow-left-copy@2x.png";
import arrow from "../assets/assets_Homework_Front-End_02/arrow-left-copy-2@2x.png";
import { useNavigate } from "react-router-dom";

const MonoSection = () => {
  let navigate = useNavigate();
  return (
    <div className="section-bg">
      <div className="container">
        <div className="sectionDiv">
          <a
            className="prevPage"
            href="/"
            onclick={() => {
              navigate("/");
            }}
          >
            <img src={arrow} alt="previous page" />
          </a>
          <div className="section">
            <div className="sectionLeft">
              <div className="sectionCard">
                <div className="trending">
                  <div className="socialJokes">SOCIAL JOKES</div>
                  <h3>• TRENDING</h3>
                </div>
                <div className="cardTitle">
                  <h1>The Granny Joke</h1>
                  <div className="line1"></div>
                  <h4>NO#1</h4>
                </div>
                <p className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates veniam explicabo saepe corporis numquam, maiores
                  architecto accusantium perferendis dicta, cum harum quidem
                  impedit consequuntur, distinctio quo fugit tenetur
                  consequatur! Quae.
                </p>
              </div>
              <div className="rate">
                <div className="ratting">
                  <div className="ratingGreen">
                    <button className="like">
                      <img src={like} alt="like" />
                    </button>
                    <p>328</p>
                  </div>
                  <div className="ratingRed">
                    <button className="dislike">
                      <img src={dislike} alt="dislike" />
                    </button>
                    <p>98</p>
                  </div>
                </div>
                <div className="prev-next">
                  <a href="prev-joke" className="prev">
                    <img src={prev} alt="previous joke" />
                    PREV.JOKE
                  </a>
                  <a href="next-joke" className="next">
                    NEXT.JOKE
                    <img src={next} alt="nextious joke" />
                  </a>
                </div>
              </div>
            </div>
            <div className="sectionRight">
              <h3>THE TOP 10 JOKES THIS WEEK</h3>
              <div className="sectionLink">
                <a href="">Smoking Joke</a>
                <br />
                <a href="">My Boss Joke</a>
                <br />
                <a href="">Dirty Millionaire Joke</a>
                <br />
                <a href="">The annoying neighbor</a>
                <br />
                <a href="">Knock Knock</a>
                <br />
                <a href="">Why Tyson lisps</a>
                <br />
                <a href="">The drunk Police officer</a>
                <br />
                <a href="">My hip dad (Dad joke)</a>
                <br />
                <a href="">What not to say in an elevator</a>
                <br />
                <a href="">Work Joke</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonoSection;
