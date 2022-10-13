import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Container,
  CardImg,
  CardGroup
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedStudentIndex = ({readStudents, students}) => {
  
  useEffect(() => {
    readStudents()
  }, [])

  return (
    <>
      <h1>List of Your Students</h1>

      <div>
      <Container className="student_cards" >
      <Row xs={1} md={3}>
        {students?.map((student, index) => {
          return (
            <Card body className="my-2" key={index} style={{maxWidth: 250}}>
            <CardImg alt="Card" src={student.image} />
            <CardBody>
              <CardTitle tag="h5">{student.name}</CardTitle>
              <CardText>Rank: {student.rank}</CardText>
            </CardBody>
              <ListGroupItem>
                Notes: {student.notes}
              </ListGroupItem>
            <CardBody>
              <NavLink to={`/studentshow/${student.id}`} className="nav-link">
              <img src="photos/Full_Info.png" style={{height: 50}}/>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
      </Row>

      </Container>
    </div>

    </>
  );
};

export default ProtectedStudentIndex;
