import React from "react";
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
} from "reactstrap";

const StudentShow = ({ students, logged_in, deleteStudent }) => {
  const { id } = useParams();
  let currentStudent = students?.find((student) => student.id === +id);

  const handleDelete = () => {
    deleteStudent(id);
    console.log(currentStudent);
  };

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
            <DeleteModal handleDelete={handleDelete}/>
          </CardBody>
        </Card>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentShow;
