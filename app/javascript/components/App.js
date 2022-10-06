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
import Navigation from "./components/Navigation";

const App = (props) => {
  const [students, setStudents] = useState(mockStudents);


  const readStudents = () => {
    console.log(students);
  };
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/protectedstudentindex"
          element={<ProtectedStudentIndex students={students} {...props} />}
        />
        <Route path="/studentshow/:id" element={<StudentShow students={students} {...props} />} />
        <Route path="/studentnew" element={<StudentNew />} />
        <Route path="/studentedit" element={<StudentEdit />} />
        <Route path= "/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
