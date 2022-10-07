import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import StudentEdit from "./StudentEdit"
import mockStudents from "../MockStudents"

describe("<StudentEdit />", () => {
  it("renders without crashing", () => {

    render(
        <MemoryRouter initialEntries={["/studentedit/1"]}>
            <Routes>
                <Route path="/studentedit/:id" element={<StudentEdit students={ mockStudents }/>} />
            </Routes>
        </MemoryRouter>

      )
      const textbox = screen.getAllByRole("textbox")
      expect(textbox[0]).toBeEnabled()
  })
})
