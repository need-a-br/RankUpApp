import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import StudentShow from "./StudentShow"
import mockStudents from "../MockStudents"
describe("<StudentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <StudentShow students={mockStudents} />
      </BrowserRouter>,
      div
      )
     const waterPark = screen.getByText("View Student Here.")
      expect(waterPark).toBeInTheDocument()
  })
})
