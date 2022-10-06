import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NavLink } from "react-router-dom";

const DeleteModal = ({ handleDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button name="submit" onClick={toggle}>
        Delete Profile
      </Button>
      <Modal toggle={toggle} isOpen={showModal}>
        <ModalHeader>Delete Confirmation</ModalHeader>
        <ModalBody>Are you sure you want to delete this profile?</ModalBody>
        <ModalFooter>
          <NavLink to={"../protectedstudentindex"} className="nav-link">
            <Button onClick={handleDelete} color="danger">
              Delete
            </Button>{" "}
          </NavLink>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
