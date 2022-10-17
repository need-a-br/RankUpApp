import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Developers from "./pages/Developers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProtectedStudentIndex from "./pages/ProtectedStudentIndex";
import StudentShow from "./pages/StudentShow";
import StudentNew from "./pages/StudentNew";
import StudentEdit from "./pages/StudentEdit";
import NotFound from "./pages/NotFound";

const App = (props) => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
 
  const readStudents = () => {
    fetch("/students")
      .then((response) => response.json())
      .then((payload) => {
        setStudents(payload)
      })
      .catch((error) => console.log(error))
  }
  
  const showStudent = (id) => {
    fetch(`/students/${id}`)
      .then((response) => response.json())
      .then((payload) => {
        setCurrentStudent(payload)
      })
      .catch((error) => console.log(error))
  }

  const createStudent = (student) => {
    const formData = new FormData();
    formData.append("student[rank]", student.rank)
    formData.append("student[name]", student.name)
    formData.append("student[notes]", student.notes)
    formData.append("student[avatar]", student.avatar)
    fetch("/students", {
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data"
      // },
      method: "POST"
    })
    .then((response) => response.json())
    .catch((errors) => console.log("Student create errors:", errors))
  }
  
  const deleteStudent = (id) => {
    fetch(`/students/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readStudents(payload))
    .catch((errors) => console.log("delete errors:", errors))

    Navigate('/students')
  }

  const updateStudent = (student) => {
    fetch(`/students/${student.id}`, {
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response)=> response.json())
    .catch((errors) => console.log("student update errors:", errors))

  }
    
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/protectedstudentindex"
          element={
            <ProtectedStudentIndex
              readStudents={readStudents}
              students = {students}
              {...props} 
            />
          }
        />
        <Route
          path="/studentshow/:id"
          element={
            <StudentShow
              showStudent={showStudent}
              deleteStudent={deleteStudent}
              currentStudent={currentStudent}
              {...props}
            />
          }
        />
        <Route
          path="/studentnew"
          element={
            <StudentNew
              createStudent={createStudent}
              {...props}
            />
          }
        />
        <Route
          path="/studentedit/:id"
          element={
            <StudentEdit
              showStudent={showStudent}
              updateStudent={updateStudent}
              currentStudent={currentStudent}
              {...props}
            />
          }
        />
        <Route path= "/*" element={<NotFound />} />
        <Route path= "/developers" element={<Developers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
