import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
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
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
            <NavItem>
                <NavLink to="/home" className="nav-link">
                about us
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/home" className="nav-link">
                contact us
                </NavLink>
            </NavItem>
            {!logged_in && (
            <NavItem>
              <a href={sign_in_route} className="nav-link">
                log in
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={new_user_route} className="nav-link">
                register
              </a>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/studentsindex" className="nav-link">
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
              <a href={sign_out_route} className="nav-link">
                log Out
              </a>
            </NavItem>
          )}
          
        </Nav>
      </>
    )
  }
  
  export default Navigation
  