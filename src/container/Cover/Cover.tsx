import React from "react";
import "./styles.css";
import Button from "../../components/Button/Button";
import { images } from "../../constants";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-content">
        <h1>What’s for today?</h1>
        <p>Place of the best food you ever desire</p>
        <Button>View More</Button>
      </div>
      <div className="cover-image">
        <img src={images.cover} className="cover-img" />
        <img src={images.l1} className="leaf leaf1" />
        <img src={images.l2} className="leaf leaf2" />
        <img src={images.l3} className="leaf leaf3" />
      </div>
    </div>
  );
};

export default Cover;
