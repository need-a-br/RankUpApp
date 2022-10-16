import React from "react"
import { NavItem, NavLink } from "reactstrap"

const Footer = () => {
  return (
    <>
      <footer className="page_bg_3">
      <NavItem>
        <NavLink href="/developers" className="nav-link">
          <img 
            alt="Meet the Developers" 
            src="../photos/Footer.png" 
            width="80%"/>
        </NavLink>
      </NavItem>          
      </footer>
    </>
  )
}

export default Footer
