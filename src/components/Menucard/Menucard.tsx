import React from "react";
import { images } from "../../constants";
import "./styles.css";
type DataProps = {
  menu: {
    title: String;
    description: String;
    price: String;
    img: String | string;
  }[];
};

const Menucard = ({ menu }: DataProps) => {
  return (
    <div className="menucard">
      {menu.map((meal) => {
        return (
          <div className="meal-cont">
            <div className="menucard-img">
              <img src={meal.img.toString()} />
            </div>
            <div className="menucard-content">
              <h5>{meal.title}</h5>
              <p>{meal.description}</p>
            </div>
            <div className="menucard-price">{meal.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menucard;
