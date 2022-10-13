import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  CardImg,
  CardImgOverlay
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedStudentIndex = ({readStudents, students}) => {
  
  useEffect(() => {
    readStudents()
  }, [])

  return (
    <>
      <h1>View Your Students Here.</h1>
      {students?.map((student, index) => {
        return (
          <Card style={{ width: "18rem", }} key={index} >
             <CardImgOverlay style={{ height: "18rem",}}>
          {student.is_ready_for_eval === true && (
            <CardImg src="../photos/test.png"/>
          )}
          </CardImgOverlay>
            <img alt="Card" src={student.image} />
            <CardBody>
              <CardTitle tag="h5">{student.name}</CardTitle>
              <CardText>Rank: {student.rank}</CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Notes: {student.notes}</ListGroupItem>
            </ListGroup>
            <CardBody>
              <NavLink to={`/studentshow/${student.id}`} className="nav-link">
                <Button>View More</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default ProtectedStudentIndex;
