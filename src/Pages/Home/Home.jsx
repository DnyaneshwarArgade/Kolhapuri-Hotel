import React from "react";
import "./Home.css";
import kolhapuriImage from "../../assets/kolhapuri_homepage.png";

function Home() {
  return (
    <div className="home-container">
      <div className="image-wrapper">
        <img
          src={kolhapuriImage}
          alt="Kolhapuri Hotel"
          className="home-image"
        />
      </div>
    </div>
  );
}

export default Home;
