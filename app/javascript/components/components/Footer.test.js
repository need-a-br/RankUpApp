import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import userEvent from '@testing-library/user-event'


describe("<Footer />", () => {
    it("Footer renders without error", () => {
        render(
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        const footerText = screen.getByText(/rankup/i)
        expect(footerText).toBeInTheDocument()
    })
})