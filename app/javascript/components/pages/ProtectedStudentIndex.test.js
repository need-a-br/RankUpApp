import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedStudentIndex from "./ProtectedStudentIndex"

describe("<ProtectedStudentIndex />", () => {
  it("renders without crashing", () => {
    const readStudents = () => {}
    const students = []

    const div = document.createElement("div")
    render(
      <BrowserRouter>
            <ProtectedStudentIndex
              readStudents = {readStudents}
              students = {students}
            />
      </BrowserRouter>,
      div
      )
     const waterPark = screen.getByText("List of Your Students")
      expect(waterPark).toBeInTheDocument()
  })
})
