import React from "react"
import { Nav, Button, NavLink, NavItem, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, CardSubtitle} from "reactstrap"


const Home = (props) => {
  return (
    <>
      <div>
        <Card className="home_image">
          <CardImg
            alt="Home Page Photo"
            src="../photos/Home_Image.png"
            width="100%"
          />
          <CardImgOverlay>
            <CardText className="home_button">
              {!props.logged_in && (
               
                  <NavItem className="nav-link">
                    <a href={props.sign_in_route} className="nav-link">
                      <img 
                        alt="Log In"
                        src="../photos/Log_In.png" 
                        width="35%"
                      />
                    </a>
                  </NavItem>
                
              )}
              {!props.logged_in && (
               
                  <NavItem className="nav-link">
                    <a href={props.new_user_route} className="nav-link">
                      <img 
                        alt="Register"
                        src="../photos/Register.png" 
                        width="35%"
                      />
                    </a>
                  </NavItem>
               
              )}
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
      
      <div id="about-us">
        <Card className="about_us">
          <CardBody>
            <img
              alt="Sample View"
              src="../photos/AboutUs_Image.png"
              width="50%"
            />
            <CardSubtitle tag="h5">
              RankUp was created to help instructors save time and increase efficiency. It was designed to enable you to quickly organize and keep track of your students as they progress through their martial arts journey. Once you have added each student to your profile, you can see all of their data with one click! Updating any details, such as rank, or indicating if the student is ready to test, are one simple click away.  
            </CardSubtitle>
          </CardBody>
            <CardText>
            </CardText>
            <CardText tag="h5">
                Sample view of how the app would look like.  
            </CardText>
            <img
              alt="Sample View"
              src="../photos/Sample_View.png"
              width="100%"
            />
        </Card>
        </div>
      
      <div id="contact-us" >
        <Card className="contact_us">
          <CardBody>
            <CardTitle tag="h5">
              <img 
              alt="Sample View"
              src="../photos/ContactUs_Image.png"
              width="50%"/>
            </CardTitle>
             
              <h1>Team Need a BR</h1>
              <h4>E-mail: teamneedabr@gmail.com</h4>         
             
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Home
