import React from "react"
import Navigation from "./Navigation"
import { Nav, NavItem, Navbar, NavbarBrand, Row, Col } from "reactstrap"
import { NavLink } from "react-router-dom"


const Header = (props) => {
  return (
    <header className="page_bg">
      <Row>
        <Col className="nav" xs="6">
          <NavbarBrand href="/">
            <img alt="Rankup Logo" src="../photos/RankUp_Logo.png"  width="60%"/>
          </NavbarBrand>

        </Col>
        
        <Col  md={{ offset: 0, size: 6 }} sm="12">
          <Navbar light >
            <NavItem className="nav-link">
              <Navigation {...props} /> 
            </NavItem>
          </Navbar>  
        </Col>
      </Row>
    </header>
  )
}

export default Header

