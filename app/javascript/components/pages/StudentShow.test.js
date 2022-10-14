import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import StudentShow from "./StudentShow"
import mockStudents from "../MockStudents"
describe("<StudentShow />", () => {
  it("renders without crashing", () => {
    const showStudent = () => {}
    const deleteStudent = () => {}
    const currentStudent = []
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <StudentShow
              showStudent={showStudent}
              deleteStudent={deleteStudent}
              currentStudent={currentStudent}
            />
      </BrowserRouter>,
      div
      )
     const waterPark = screen.getByText(/Student Profile/i)
     
      expect(waterPark).toBeInTheDocument()
  })
})
