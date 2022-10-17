import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, CardImg, NavLink, FormText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";

const StudentNew = ({ createStudent, logged_in }) => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    name: "",
    notes: "",
    rank: "",
    avatar: {},
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
    console.log(newStudent)
    createStudent(newStudent);
    navigate("/protectedstudentindex");
    window.location.reload(false)
  };
  

  return (
    <div className="page_bg_2">
    <div className="add_container">
      <h1 className="h1-2">Add a Student</h1>
      {logged_in && (
        <div >
          <Form>
            <CardTitle>Complete the form to add a Student. When done, click on Submit button</CardTitle>
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
              <Label for="image">Image</Label>
              <Input
                type="text"
                name="image"
                placeholder="URL of Image"
                onChange={handleChange}
                value={newStudent.image}
              />
            </FormGroup>

            <FormGroup>
              <Label for="rank">Rank/Belt</Label>
              <Input
                type="select"
                name="rank"
                placeholder="Rank"
                onChange={handleChange}
                value={newStudent.rank}
              >
                <option>Select Student Belt Color</option>
                <option value="white">White</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
              </Input>
            </FormGroup>
            <Label for="next_requirement">Next Requirement</Label>
            <Input
              type="select"
              name="next_requirement"
              placeholder="Next Requirement"
              onChange={handleChange}
              value={newStudent.next_requirement}
            >
              <option>Next Requirement</option>
              <option value="technique1">First Technique</option>
              <option value="technique2">Second Technique</option>
              <option value="technique3">Third Technique</option>
              <option value="first_stripe">First Stripe</option>
              <option value="technique4">Fourth Technique</option>
              <option value="technique5">Fifth Technique</option>
              <option value="technique6">Sixth Technique</option>
              <option value="second_stripe">Second Stripe</option>
              <option value="technique7">Seventh Technique</option>
              <option value="technique8">Eighth Technique</option>
              <option value="technique9">Ninth Technique</option>
              <option value="third_stripe">Third Stripe</option>
              <option value="technique10">Tenth Technique</option>
              <option value="technique11">Eleventh Technique</option>
              <option value="technique12">Twelfth Technique</option>
              <option value="hand_form">Hand Form</option>
              <option value="weapon_form">Weapon Form</option>
              <option value="two_person_form">Two Person Form</option>
              <option value="format">Format</option>
            </Input>
            <FormGroup>
              <Label for="avatar">Avatar</Label>
              <Input
                type="file"
                name="avatar"
                onChange={handleChange}
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
              <FormText>Upload Student Image</FormText>
            </FormGroup>

            <Button onClick={handleSubmit} name="submit" className="button">
              Add Student
            </Button>
          </Form>
        </div>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
      </div>
    </div>
  );
};

export default StudentNew;
