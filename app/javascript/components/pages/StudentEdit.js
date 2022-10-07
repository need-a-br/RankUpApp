import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'

const StudentEdit = ({ students, updateStudent, logged_in }) => {
    
    const navigate = useNavigate()

    const { id } = useParams()
    let currentStudent =  students?.find(student => student.id === +id)

    console.log(students)
    console.log(id)
    console.log(currentStudent)
    const [ editStudent, setEditStudent ] = useState(currentStudent)

    const handleChangeStudent = (e) => {
        setEditStudent({ ...editStudent, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = () => {
        updateStudent(editStudent, currentStudent.id)
        console.log(editStudent)
            alert("Student profile has been updated!")
            navigate(`/studentshow/${id}`)
    }
   
    return (
        <>
        {logged_in && (
         <div className='container'>
            
            <h1 style={{textAlign:"center"}}>Edit {currentStudent.name}</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Edit student's name</Label>
                    <Input type="string" name="name" placeholder={currentStudent.name} onChange={handleChangeStudent} value={editStudent.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="notes">Edit student's notes</Label>
                    <Input type="text" name="notes" placeholder={currentStudent.notes} onChange={handleChangeStudent} value={editStudent.notes}/>
                </FormGroup>
                <FormGroup>
                    <Label for="rank">Edit student's rank</Label>
                    <Input type="string" name="rank" placeholder={currentStudent.rank} onChange={handleChangeStudent} value={editStudent.rank} defaultValue={currentStudent.rank}/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL for Student</Label>
                    <Input type="text" name="image" placeholder={currentStudent.image} onChange={handleChangeStudent} value={editStudent.image}/>
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

export default StudentEdit