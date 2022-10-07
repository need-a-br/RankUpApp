import React, {useState} from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from 'react-router-dom'

const StudentNew = ( { createStudent, logged_in }) => {
  const navigate = useNavigate()
  const [newStudent, setNewStudent] = useState({
    name:"", 
    notes:"",
    rank:"",
    image: ""
  })

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value} 
      )
  }

  const handleSubmit = () => {
    createStudent(newStudent)
    alert("Student has been added!")
    navigate("/protectedstudentindex")
  }

  return (
    <>
      <h3>Add a Student</h3>
    {logged_in && (
      <div>Complete the form to add a Student. When done, click on Submit button
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="string" name="name" placeholder='First Name and Last Name' onChange={handleChange} value={newStudent.name} />
        </FormGroup>

        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input type="text" name="notes" placeholder='Notes' onChange={handleChange} value={newStudent.notes} />
        </FormGroup>

        <FormGroup>
          <Label for="rank">Rank</Label>
          <Input type="string" name="rank" placeholder='Rank'onChange={handleChange} value={newStudent.rank} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" placeholder='URL of Image'onChange={handleChange} value={newStudent.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
           Submit
        </Button>
      </Form>
      </div>
    )}
    {!logged_in && <h1>Please Log In To Continue</h1>}
    </>
  )
}

export default StudentNew