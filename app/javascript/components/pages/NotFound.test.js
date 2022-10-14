import React from "react"
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
    it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<NotFound />, div)
    const notFound = screen.getByAltText(/Page Not Found/i)
    expect(notFound).toBeInTheDocument()
    })
})