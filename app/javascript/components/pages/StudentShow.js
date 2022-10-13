import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  CardGroup,
  CardImg,
  Row,
  Col
} from "reactstrap";

const StudentShow = ({logged_in, showStudent, deleteStudent, currentStudent, index }) => {
  const { id } = useParams();

  useEffect(() => {
    showStudent(id)
  }, [])

  const handleDelete = () => {
    deleteStudent(id)
  };

  return (
    <>
      <h1>Profile of {currentStudent.name}</h1>
      {currentStudent && !currentStudent.id && (
        <div>Selected student is not your student.</div>
      )}

      {logged_in && (
        <CardGroup className="show_row">
          <Card style={{ width: "18rem",}} key={index}>
            <CardImg
                alt="Student Image"
                src={currentStudent.image}
                top width="100%"
              />
            <CardBody>
            <Row xs="3">
              <Col className="show_button">
                <NavLink to={`/studentedit/${currentStudent.id}`} className="nav-link">
                  <img src="../photos/Update.png" style={{height: 60}}/>
                </NavLink>
              </Col>
              <Col >
                <DeleteModal handleDelete={handleDelete}/>
              </Col>
              <Col className="show_button">
                <NavLink to={"/protectedstudentindex"} className="nav-link">
                  <img src="../photos/All_Students.png" style={{height: 60}}/>
                </NavLink>
              </Col>
            </Row>
            </CardBody>
          </Card>
          <Card className="student_show">
            <CardBody>
              <CardTitle tag="h3">
                {currentStudent.name}
              </CardTitle>
              <CardText tag="h5">
                Rank: {currentStudent.rank}
              </CardText>
              <CardText tag="h5">
                Notes: {currentStudent.notes}
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentShow;
