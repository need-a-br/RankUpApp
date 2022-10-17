import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByAltText("Home"))
    expect(screen.getByAltText("Home")).toBeInTheDocument()
    userEvent.click(screen.getByAltText("About RankUp"))
    expect(screen.getByAltText("About RankUp")).toBeInTheDocument()
    userEvent.click(screen.getByAltText("Log In"))
    expect(screen.getByAltText("Log In")).toBeInTheDocument()
  })
})