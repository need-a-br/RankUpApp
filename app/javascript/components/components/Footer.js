import React from "react"
import { NavItem, NavLink } from "reactstrap"

const Footer = () => {
  return (
    <>
      <footer>
      <NavItem>
        <NavLink href="/developers" className="nav-link">
        <img src="../photos/Footer.png" style={{height: 80}}/>
        </NavLink>
      </NavItem>          
      </footer>
    </>
  )
}

export default Footer
