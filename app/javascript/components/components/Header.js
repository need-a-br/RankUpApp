import React from "react"
import Navigation from "./Navigation"
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap"
import { NavLink } from "react-router-dom"


const Header = (props) => {
  return (
    <header>
      <Navbar light>
        <NavbarBrand href="/">
          <img alt="RankUp Logo" src="../photos/RankUp_Logo.png"  style={{height: 80}}/>
        </NavbarBrand>
        <NavItem className="nav-link"><Navigation {...props} /> </NavItem>
      </Navbar>  
    </header>
  )
}

export default Header

