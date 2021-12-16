import React from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="container">
        <div className="hero">
          <h1>The Joke Bible</h1>
          <h2>Daily Laughs for you and yours</h2>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
