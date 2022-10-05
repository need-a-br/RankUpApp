import React from "react"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <>
      <h5>RankUp <Navigation {...props} /></h5>
    </>
  )
}

export default Header
