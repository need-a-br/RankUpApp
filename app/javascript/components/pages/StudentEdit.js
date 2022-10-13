import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const StudentEdit = ({
  showStudent,
  updateStudent,
  currentStudent,
  logged_in,
}) => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    showStudent(id);
  }, []);

  const [editStudent, setEditStudent] = useState(currentStudent);

  const handleChangeStudent = (e) => {
    setEditStudent({ ...editStudent, [e.target.name]: e.target.value });
  };

  const handleReadyToTestChange = (e) => {
    setEditStudent({
      ...editStudent,
      [e.target.name]: !editStudent.is_ready_for_eval,
    });
  };

  const handleSubmit = () => {
    updateStudent(editStudent, currentStudent.id);
    console.log(editStudent);
    navigate(`/studentshow/${id}`);
  };

  return (
    <>
      {currentStudent && !currentStudent.id && (
        <div>Selected student is not your student.</div>
      )}
      {logged_in && (
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Edit {currentStudent.name}</h1>
          <Form>
            <FormGroup>
              <Label for="name">Edit student's name</Label>
              <Input
                type="string"
                name="name"
                placeholder={currentStudent.name}
                onChange={handleChangeStudent}
                value={editStudent.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="notes">Edit student's notes</Label>
              <Input
                type="text"
                name="notes"
                placeholder={currentStudent.notes}
                onChange={handleChangeStudent}
                value={editStudent.notes}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rank">Edit student's rank</Label>
              <Input
                type="select"
                name="rank"
                placeholder={currentStudent.rank}
                onChange={handleChangeStudent}
                value={editStudent.rank}
                defaultValue={currentStudent.rank || "white"}
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
            <FormGroup>
              <Label for="next_requirement">
                Edit student's next requirement
              </Label>
              <Input
                type="select"
                name="next_requirement"
                placeholder={currentStudent.next_requirement}
                onChange={handleChangeStudent}
                value={editStudent.next_requirement}
                defaultValue={currentStudent.next_requirement || "technique1"}
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
            </FormGroup>
            <FormGroup>
              <Label for="image">Image URL for Student</Label>
              <Input
                type="text"
                name="image"
                placeholder={currentStudent.image}
                onChange={handleChangeStudent}
                value={editStudent.image}
              />
            </FormGroup>
            <FormGroup switch>
              <Input
                name="is_ready_for_eval"
                type="switch"
                role="switch"
                defaultChecked={editStudent.is_ready_for_eval || false}
                onClick={handleReadyToTestChange}
              />
              <Label check>Ready To Test?</Label>
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

export default StudentEdit;
