import PropTypes from "prop-types"
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
// import Students from "../mockstudents"
const App = (props) => {

  return (
    <BrowserRouter>
    <Header {...props} />
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route
        path="/studentindex"
        element={<StudentIndex  />}
      />
      <Route
        path="/studentshow/:id"
        element={<StudentShow  />}
      />
      <Route
        path="/studentnew"
        element={<StudentNew createApartment={createApartment} />}
      />
      <Route path="/studentedit" element={<StudentEdit />} />
      <Route element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
  }

  // {
  //   logged_in,
  //   current_user,
  //   new_user_route,
  //   sign_in_route,
  //   sign_out_route
  //   }
  // console.log("logged_in:", logged_in)
  // console.log("current_user:", current_user)
  // console.log("new_user_route:", new_user_route)
  // console.log("sign_in_route:", sign_in_route)
  // console.log("sign_out_route:", sign_out_route)
  export default App
