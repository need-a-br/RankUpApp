import PropTypes from "prop-types"
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header {...props} />
        <Routes>
          <Route exact path="/" element={<Home {...props} />} />
        </Routes>
      <Footer />
    </BrowserRouter>
);
  }
  export default App
