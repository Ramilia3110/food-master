import React from "react";
import "./styles.css";
import { data } from "../../constants";
import Menucard from "../../components/Menucard/Menucard";
import Button from "../../components/Button/Button";
const menu = data.menu;
const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h3>Most Popular Items</h3>
      <div className="menu-container">
        <Menucard menu={menu} />
      </div>
      <Button>View More</Button>
    </div>
  );
};

export default Menu;
