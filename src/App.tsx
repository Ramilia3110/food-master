import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cover from "./container/Cover/Cover";
import Home from "./container/Home/Home";
import Whyus from "./container/Whyus/Whyus";
import Menu from "./container/Menu/Menu";
import Book from "./container/Book/Book";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Home />
      <Whyus />
      <Menu />
      <Book />
    </div>
  );
}

export default App;
