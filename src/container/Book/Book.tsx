import React from "react";
import "./styles.css";
import Button from "../../components/Button/Button";

const Book = () => {
  return (
    <div className="book" id="book">
      <div className="form">
        <div className="form-text">
          <h1>
            <span>
              <img alt="" />
            </span>
            Book Now{" "}
            <span>
              <img alt="" />
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            fugit.
          </p>
        </div>
        <div className="main-form">
          <form action="index.php" method="get">
            <div>
              <span>Your full name ?</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here..."
                required
              />
            </div>
            <div>
              <span>Your email address ?</span>
              <input
                type="email"
                name="name"
                id="name"
                placeholder="Write your email here..."
                required
              />
            </div>
            <div>
              <span>How many people ?</span>
              <select name="people" id="people" required>
                <option value="">People</option>
                <option value="1">1 People</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
            <div>
              <span>What time ?</span>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="Time"
                required
              />
            </div>
            <div>
              <span>What is the date ?</span>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="date"
                required
              />
            </div>
            <div>
              <span>Your phone number ?</span>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Write your number here..."
                required
              />
            </div>
            <div id="submit">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
