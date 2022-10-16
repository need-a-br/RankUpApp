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
  Col,
  CardImgOverlay
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
    <div className="bg">
      <h1 className="h1-2">Student Profile</h1>
      
      {currentStudent && !currentStudent.id && (
        <div>Selected student is not your student.</div>
      )}

      {logged_in && (
        <CardGroup className="show_row">
          <Card style={{ width: "15rem"}} key={index}>
            <CardImg
                alt="Student Image"
                src={currentStudent.image}
                top width="100%"
                className="student_cards"
              />
            <CardImgOverlay className="ready_stamp">
              {currentStudent.is_ready_for_eval === true && (
                <CardImg src="../photos/test.png"/>
              )}
            </CardImgOverlay>
          </Card>
          <Card className="student_show">
            <CardBody className="h5-2">
              <CardTitle tag="h3">
                {currentStudent.name}
              </CardTitle>
              <CardText tag="h5" className="h5-2">
                Rank/Belt: {currentStudent.rank}
              </CardText>
              <CardText tag="h5" className="h5-2">
                Next Requirement: {currentStudent.next_requirement}
              </CardText>
              <CardText tag="h5" className="h5-2">
                Notes: {currentStudent.notes}
              </CardText>
            </CardBody>
            <CardBody>
            </CardBody>
            <Row xs="3">
              <Col className="show_button">
                <NavLink to={`/studentedit/${currentStudent.id}`} className="nav-link">
                  <img alt="Update Students" src="../photos/Update.png" width="100%"/>
                </NavLink>
              </Col>
              <Col >
                <DeleteModal handleDelete={handleDelete}/>
              </Col>
              <Col className="show_button">
                <NavLink to={"/protectedstudentindex"} className="nav-link">
                  <img alt="Back to All Students" src="../photos/All_Students.png" width="100%"/>
                </NavLink>
              </Col>
            </Row>
          </Card>
        </CardGroup>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </div>
  );
};

export default StudentShow;
