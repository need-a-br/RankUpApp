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
  CardImgOverlay,
  CardImg
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
      <h1> View Student Here. </h1>
      {currentStudent && !currentStudent.id && (
        <div>Selected student is not your student.</div>
      )}

      {logged_in && (
        <Card style={{ width: "18rem",}} key={index} >
          <CardImg alt="Card" src={currentStudent.image} />
          <CardImgOverlay style={{ height: "18rem",}}>
          {currentStudent.is_ready_for_eval === true && (
            <CardImg src="../photos/test.png"/>
          )}
          </CardImgOverlay>
          <CardBody>
            <CardTitle tag="h5">{currentStudent.name}</CardTitle>
            <CardText>Rank: {currentStudent.rank}</CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Notes: {currentStudent.notes}</ListGroupItem>
          </ListGroup>
          <CardBody>
            <NavLink to={"/protectedstudentindex"} className="nav-link">
              <Button>See All Students</Button>
            </NavLink>
            <NavLink to={`/studentedit/${currentStudent.id}`} className="nav-link">
              <Button>Update/Edit</Button>
            </NavLink>
            <DeleteModal handleDelete={handleDelete}/>
          </CardBody>
        </Card>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentShow;
