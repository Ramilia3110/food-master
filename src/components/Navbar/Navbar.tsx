import React, { useState } from "react";
import { images } from "../../constants";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./styles.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <img src={images.logo} />
        </div>
        <div className="navbar-links__container">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>

          <li>
            <a href="#book">Booking</a>
          </li>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="menu-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="menu-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu__container scale-up-center">
            <div className="navbar-menu__container-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Awards</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </div>
            <div className="navbar-menu__container-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
