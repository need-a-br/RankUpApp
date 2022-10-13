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
              <img src="../photos/Home.png" style={{height: 50}}/>
              </NavLink>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#about-us" className="nav-link">
              <img src="../photos/About_Us.png" style={{height: 50}}/>
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#contact-us" className="nav-link">
              <img src="../photos/Contact_Us.png" style={{height: 50}}/>
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
                <a href={sign_in_route} className="nav-link">
                <img src="../photos/Log_In.png" style={{height: 50}}/>
                </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
                <a href={new_user_route} className="nav-link">
                <img src="../photos/Register.png" style={{height: 50}}/>
                </a>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/protectedstudentindex" className="nav-link">
              <img src="../photos/My_Students.png" style={{height: 50}}/>
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/studentnew" className="nav-link">
              <img src="../photos/Add_Student.png" style={{height: 50}}/>
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
                <a href={sign_out_route} className="nav-link">
                <img src="../photos/Log_Out.png" style={{height: 50}}/>
                </a>
            </NavItem>
          )}
        </Nav>
      </>
    )
  }
  
  export default Navigation