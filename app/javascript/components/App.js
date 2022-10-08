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

const App = (props) => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    readStudents()
  }, [])
 
  const readStudents = () => {
    fetch("/students")
      .then((response) => response.json())
      .then((payload) => {
        setStudents(payload)
      })
      .catch((error) => console.log(error))
  }
  const createStudent = (students) => {
    fetch("/students", {
      body: JSON.stringify(students),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readStudents(payload))
    .catch((errors) => console.log("Student create errors:", errors))
  }
  const deleteStudent = (student) => {
    console.log("student:", student)

  }



  const updateStudent = (student) => (
    console.log("student:", student)
  )

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/protectedstudentindex"
          element={<ProtectedStudentIndex {...props} students = { students }/>}
        />
        <Route path="/studentshow/:id" element={<StudentShow deleteStudent={deleteStudent} student={students} {...props}/>} />
        <Route path="/studentnew" element={<StudentNew createStudent={createStudent} {...props} />} />
        <Route path="/studentedit/:id" element={<StudentEdit updateStudent={updateStudent} students={students} {...props} />} />
        <Route path= "/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
