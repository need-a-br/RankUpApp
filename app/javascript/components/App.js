import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProtectedStudentIndex from "./pages/ProtectedStudentIndex";
import StudentShow from "./pages/StudentShow";
import StudentNew from "./pages/StudentNew";
import StudentEdit from "./pages/StudentEdit";
import mockStudents from "./MockStudents";
import NotFound from "./pages/NotFound";
const App = (
  props,
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  user_id
) => {
  const [students, setStudents] = useState(mockStudents);
  // console.log(user_id)
  
  const readStudents = () => {
    console.log(students);
  };
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/protectedstudentindex"
          element={<ProtectedStudentIndex students={students} {...props} />}
        />
        <Route path="/studentshow" element={<StudentShow />} />
        <Route path="/studentnew" element={<StudentNew />} />
        <Route path="/studentedit" element={<StudentEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
