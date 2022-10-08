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
} from "reactstrap";

const StudentShow = ({logged_in, deleteStudent, index }) => {
  const { id } = useParams();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    showStudent()
  }, [])

  const showStudent = () => {
    fetch(`/students/${+id}`)

      .then((response) => response.json())
      .then((payload) => {
        console.log(payload)
        setStudents(payload)
      })
      .catch((error) => console.log(error))
  }

  const handleDelete = () => {
    deleteStudent(id);
    console.log(students);
  };

  return (
    <>
      <h1> View Student Here. </h1>
      {!students.id && (
        <div>Selected student is not your student.</div>
      )}

      {logged_in && (
        <Card style={{ width: "18rem",}} key={index} >
          <img alt="Card" src={students.image} />
          <CardBody>
            <CardTitle tag="h5">{students.name}</CardTitle>
            <CardText>Rank: {students.rank}</CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Notes: {students.notes}</ListGroupItem>
          </ListGroup>
          <CardBody>
            <NavLink to={"/protectedstudentindex"} className="nav-link">
              <Button>See All Students</Button>
            </NavLink>
            <NavLink to={`/studentedit/${students.id}`} className="nav-link">
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
