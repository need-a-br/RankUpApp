import React from "react"
import { Nav, NavItem, Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'

const Navigation = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  }) => {
    return (
      <>
        <Nav>
          {!logged_in && (
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#about-us" className="nav-link">
                About Us
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#contact-us" className="nav-link">
                Contact Us
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Button outline size="sm">
                <a href={sign_in_route} className="nav-link">
                  Log In
                </a>
              </Button>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Button outline size="sm">
                <a href={new_user_route} className="nav-link">
                  Register
                </a>
              </Button>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/protectedstudentindex" className="nav-link">
                See My Students
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/studentnew" className="nav-link">
                Add a student
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <Button outline size="sm">
                <a href={sign_out_route} className="nav-link">
                  Log Out
                </a>
              </Button>
            </NavItem>
          )}
        </Nav>
      </>
    )
  }
  
  export default Navigation