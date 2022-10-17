import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import StudentEdit from "./StudentEdit"
import mockStudents from "../MockStudents"

describe("<StudentEdit />", () => {
  it("renders without crashing", () => {
    const showStudent = () => {}
    const students = []
    render(
        <MemoryRouter initialEntries={["/studentedit/1"]}>
            <Routes>
                <Route path="/studentedit/:id" element={<StudentEdit students={ mockStudents }
                showStudent={showStudent}
             
                />} />
            </Routes>
        </MemoryRouter>

      )
      const editHeader = screen.getByRole('heading', { name: /Please Log In To Continue/i})
      expect(editHeader).toBeInTheDocument()
  })
})
