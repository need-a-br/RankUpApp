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
              <img alt="Home" src="../photos/Home.png" style={{height: 40}}/>
              </NavLink>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#about-us" className="nav-link">
              <img alt="About RankUp" src="../photos/About_Us.png" style={{height: 40}}/>
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <Link to="/#contact-us" className="nav-link">
              <img alt="Contact Us" src="../photos/Contact_Us.png" style={{height: 40}}/>
              </Link>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
                <a href={sign_in_route} className="nav-link">
                <img alt="Log In" src="../photos/Log_In.png" style={{height: 40}}/>
                </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
                <a href={new_user_route} className="nav-link">
                <img alt="Register" src="../photos/Register.png" style={{height: 40}}/>
                </a>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/protectedstudentindex" className="nav-link">
              <img alt="My Students" src="../photos/My_Students.png" style={{height: 40}}/>
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/studentnew" className="nav-link">
              <img alt="Add Student" src="../photos/Add_Student.png" style={{height: 40}}/>
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
                <a href={sign_out_route} className="nav-link">
                <img alt="Log Out" src="../photos/Log_Out.png" style={{height: 40}}/>
                </a>
            </NavItem>
          )}
        </Nav>
      </>
    )
  }
  
  export default Navigation