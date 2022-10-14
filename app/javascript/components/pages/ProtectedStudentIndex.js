import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroupItem,
  CardImgOverlay,
  Row,
  Container,
  CardImg,
  Col
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedStudentIndex = ({ readStudents, students }) => {
  useEffect(() => {
    readStudents();
  }, []);

  return (
    <>
      <h1>List of Your Students</h1>
        <Container className="student_cards">
          <Row xs={1} md={3} className="my-2">
            {students?.map((student, index) => {
              return (
                <Card
                  body
                  className="student_cards2"
                  key={index}
                  style={{ maxWidth: 300 }}
                >
                  <CardImgOverlay className="ready_stamp">
                    {student.is_ready_for_eval === true && (
                      <CardImg  src="../photos/test.png" />
                    )}
                  </CardImgOverlay>
                  <CardImg className="index_photo" alt="Card" src={student.image} />
                  <CardBody>
                    <CardTitle tag="h5">
                      {student.name}
                    </CardTitle>
                    <CardText>
                      Rank/Belt: {student.rank} 
                    </CardText>
                    <ListGroupItem>
                      Next Requirement: {student.next_requirement}
                    </ListGroupItem>
                  </CardBody>
                  <CardBody className="index_button">
                    
                      <NavLink to={`/studentshow/${student.id}`} className="nav-link">
                        <img src="../photos/Full_Info.png" style={{ height: 50 }}/>
                      </NavLink>
                
                  </CardBody>
                </Card>
              );
            })}
          </Row>
        </Container>
    </>
  );
};

export default ProtectedStudentIndex;
