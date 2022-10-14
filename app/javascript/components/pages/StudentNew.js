import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap";
import { useNavigate } from "react-router-dom";

const StudentNew = ({ createStudent, logged_in }) => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    name: "",
    notes: "",
    rank: "",
    image: "",
  });

  const handleChange = (e) => {
    let value;
    if (e.target.name === "avatar") {
      value = e.target.files[0]
    } else {
      value = e.target.value
    }
    setNewStudent({ ...newStudent, [e.target.name]: value });
  };

  const handleSubmit = () => {
    createStudent(newStudent);
    alert("Student has been added!");
    navigate("/protectedstudentindex");
  };

  return (
    <>
      <h3>Add a Student</h3>
      {logged_in && (
        <div>
          Complete the form to add a Student. When done, click on Submit button
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
              <Label for="avatar">Avatar</Label>
              <Input
                type="file"
                name="avatar"
                onChange={handleChange}
              />
              <FormText>Upload Student Image</FormText>
            </FormGroup>
            <Button onClick={handleSubmit} name="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  );
};

export default StudentNew;
