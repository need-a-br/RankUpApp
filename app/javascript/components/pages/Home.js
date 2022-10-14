import React from "react"
import { Nav, Button, NavLink, NavItem, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from "reactstrap"


const Home = (props) => {
  return (
    <>
      <div>
        <Card inverse className="home_image">
          <CardImg
            alt="Home Page Photo"
            src="photos/Home_Image.png"
          />
          <CardImgOverlay>
            <CardText className="home_button">
              {!props.logged_in && (
                <>
                  <NavItem className="nav-link">
                    <a href={props.sign_in_route} className="nav-link">
                      <img src="photos/Log_In.png" style={{height: 50}}/>
                    </a>
                  </NavItem>
                </>
              )}
              {!props.logged_in && (
                <>
                  <NavItem className="nav-link">
                    <a href={props.new_user_route} className="nav-link">
                      <img src="photos/Register.png" style={{height: 50}}/>
                    </a>
                  </NavItem>
                </>
              )}
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>

      <div id="about-us">
        <Card inverse className="about_us">
          <CardBody>
            <CardTitle tag="h5"><img src="photos/AboutUs_Image.png" style={{height: 200}}/></CardTitle>
              <CardText tag="h5">
              RankUp was created to help instructors save time and increase efficiency. It was designed to enable you to quickly organize and keep track of your students as they progress through their martial arts journey. Once you have added each student to your profile, you can see all of their data with one click! Updating any details, such as rank, or indicating if the student is ready to test, are one simple click away.              
              </CardText>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card body color="secondary" className="cards">
          <CardBody>
            <CardTitle tag="h5">Track the Rank of Your Student</CardTitle>
              <CardText>
              Sample view of how the app would look like.            
              </CardText>
              <CardImg
              alt={"Home Page Photo"}
              src={"https://w7.pngwing.com/pngs/80/677/png-transparent-laptop-dell-computer-monitors-technical-support-chuck-norris-celebrities-electronics-netbook.png"}
              width="100%"
              />
          </CardBody>
        </Card>
      </div>
      
      <div id="contact-us" >
        <Card className="contact_us">
          <CardBody>
            <CardTitle tag="h5"><img src="photos/ContactUs_Image.png" style={{height: 200}}/></CardTitle>
             
              <h5>Team Need a BR</h5>
              <h6>E-mail: teamneedabr@gmail.com</h6>         
             
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Home
