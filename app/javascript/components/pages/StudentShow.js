import React from "react";
import { redirect, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const StudentShow = ({ students, logged_in }) => {
  const { id } = useParams();
  let currentStudent = students?.find((student) => student.id === +id);
  return (
    <>
      <h1> View Student Here. </h1>
      {logged_in && (
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Card" src={currentStudent.image} />
          <CardBody>
            <CardTitle tag="h5">{currentStudent.name}</CardTitle>
            <CardText>Rank: {currentStudent.rank}</CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Notes: {currentStudent.notes}</ListGroupItem>
          </ListGroup>
          <CardBody>
            <NavLink to={"/protectedstudentindex"} className="nav-link">
              <Button>Back to All Students</Button>
            </NavLink>
          </CardBody>
        </Card>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentShow;
