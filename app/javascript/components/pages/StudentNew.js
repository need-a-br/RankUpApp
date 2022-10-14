import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, CardImg } from "reactstrap";
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
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createStudent(newStudent);
    navigate("/protectedstudentindex");
  };

  return (
    <div className="show_row">
      <div className="add_container">
      <h1>Add a Student</h1>
      {logged_in && (
        <div >
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
              <Label for="notes">Notes</Label>
              <Input
                type="text"
                name="notes"
                placeholder="Notes"
                onChange={handleChange}
                value={newStudent.notes}
              />
            </FormGroup>

            <CardImg onClick={handleSubmit} name="submit" src="../photos/AddStudent.png" style={{ width: 150 }}/>

          </Form>
        </div>
      )}
      {!logged_in && <h1>Please Log In To Continue</h1>}
      </div>
    </div>
  );
};

export default StudentNew;
