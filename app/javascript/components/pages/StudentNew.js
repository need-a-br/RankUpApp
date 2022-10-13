import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, CardImg } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StudentNew = ({ createStudent, logged_in }) => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    name: "",
    notes: "",
    rank: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createStudent(newStudent);
    navigate("/protectedstudentindex");
  };

  return (
    <>
      <h1>Add a Student</h1>
      {logged_in && (
        <div className="container">
          <h4>Complete the form to add a Student. When done, click on Submit button</h4>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="string"
                name="name"
                placeholder="First Name and Last Name"
                onChange={handleChange}
                value={newStudent.name}
              />
            </FormGroup>

            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                type="text"
                name="notes"
                placeholder="Notes"
                onChange={handleChange}
                value={newStudent.notes}
              />
            </FormGroup>

            <FormGroup>
              <Label for="rank">Rank</Label>
              <Input
                type="select"
                name="rank"
                placeholder="Rank"
                onChange={handleChange}
                value={newStudent.rank}
              >
                <option>select student belt color</option>
                <option value="white">white</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="brown">brown</option>
                <option value="black">black</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="text"
                name="image"
                placeholder="URL of Image"
                onChange={handleChange}
                value={newStudent.image}
              />
            </FormGroup>
         
            <CardImg  onClick={handleSubmit} name="submit" src="../photos/AddStudent.png" style={{ height: 50 }}/>
          
          </Form>
        </div>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentNew;
