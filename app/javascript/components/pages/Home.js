import React from "react"
import { Nav, Button, NavLink, NavItem, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from "reactstrap"


const Home = (props) => {
  return (
    <>
      <div>
        <Card inverse className="home_image">
          <CardImg
            alt="Home Page Photo"
            src="https://i.pinimg.com/originals/29/a5/70/29a570101f9ac3d98d3c54b3d11cfbec.jpg"
            style={{height: 700}}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5">
              Welcome to RankUp!
            </CardTitle>
            <CardText>
              Join RankUp to easily findout the rank of your students and any progress notes you have for each one of them.
              <br/> 
              Register Now! 
              <br/>
              For registered users, simply click on Log In.
            </CardText>
            <CardText>
              {!props.logged_in && (
                <>
                  <NavItem className="nav-link">
                    <Button outline size="sm"> 
                      <a href={props.sign_in_route} className="nav-link">
                        Log In
                      </a>
                    </Button>
                  </NavItem>
                </>
              )}
              {!props.logged_in && (
                <>
                  <NavItem className="nav-link">
                    <Button outline size="sm"> 
                      <a href={props.new_user_route} >
                        Register
                      </a>
                    </Button>
                  </NavItem>
                </>
              )}
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>

      <br/><br/>

      <div id="about-us">
        <Card body color="secondary" inverse style={{ width: '50rem' }} className="cards">
          <CardBody>
            <CardTitle tag="h5">About Us</CardTitle>
              <CardText>
                RankUp is a tracking app that seeks to optimize the way martial arts instructors can keep track of their students. It allows an instructor to see a list of their students and their ranks, as well as keep any notes about them all in one place.              
              </CardText>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card body color="light" style={{ width: '50rem' }} className="cards">
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
      
      <div id="contact-us" style={{ width: '50rem' }} className="cards">
        <Card body color="dark" inverse>
          <CardBody>
            <CardTitle tag="h5">Contact Us</CardTitle>
              <CardText>
              Team Need a Br
              E-mail: teamneedabr@gmail.com         
              </CardText>
          </CardBody>
        </Card>
      </div>
      <br/><br/>
    </>
  )
}

export default Home
