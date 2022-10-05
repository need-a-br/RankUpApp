import React from "react"
import { Button, NavLink, NavItem} from "reactstrap"
import Navigation from "../components/Navigation"

const Home = (props) => {
  return (
    <div>
      <h5>Welcome to RankUp!</h5>
      <p>RankUp is a tracking app that seeks to optimize the way martial arts instructors can keep track of their students. It allows an instructor to see a list of their students and their ranks, as well as keep any notes about them all in one place.</p>
      <Button color="primary">
        Log In
      </Button>
      <Button color="primary">
        Register
      </Button>
    </div>
  )
}

export default Home
