import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import userEvent from '@testing-library/user-event'


describe("<Header/>", () => {
    it("Header renders without error", () => {
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const headerText = screen.getByAltText(/rankup logo/i)
        expect(headerText).toBeInTheDocument()
    })
})