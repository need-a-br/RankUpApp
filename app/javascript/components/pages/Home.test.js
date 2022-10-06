import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"



describe("<Home/>", () => {
    it("Home renders without error", () => {
        render(
            <BrowserRouter>
            <Home/>
            </BrowserRouter>
        )
        const headerText = screen.getByText(/Welcome to RankUp!/i)
        expect(headerText).toBeInTheDocument()
    })
})