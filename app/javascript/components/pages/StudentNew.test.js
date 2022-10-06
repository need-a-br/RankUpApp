import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import StudentNew from "./StudentNew"

describe("<StudentNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <StudentNew />
      </BrowserRouter>,
      div
      )
     const newStudent = screen.getByText("Add a Student")
      expect(newStudent).toBeInTheDocument()
  })
})