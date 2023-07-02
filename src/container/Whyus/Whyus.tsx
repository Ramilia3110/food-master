import React from "react";
import "./styles.css";
import { images } from "../../constants";
import Button from "../../components/Button/Button";

const Whyus = () => {
  return (
    <div className="whyus" id="whyus">
      <div className="whyus__container">
        <div className="whyus-image">
          <img src={images.crab} />
        </div>
        <div className="whyus-content">
          <h3>Why us?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
