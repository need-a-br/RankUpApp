import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
  }) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
      <>
      <h1>Student App</h1>
      </>
  )
  }

  export default App
