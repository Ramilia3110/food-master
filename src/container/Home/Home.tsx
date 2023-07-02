import React from "react";
import "./styles.css";
import { images } from "../../constants";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h3>We Serve</h3>

        <ul className="home-content_links">
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div className="home-image">
        <img src={images.about} />
      </div>
    </div>
  );
};

export default Home;
