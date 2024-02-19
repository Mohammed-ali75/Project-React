import React from "react";
import { useState } from "react";
import ME from "../img/imgME.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" onClick={handleShow} className="btnMyData">
        <h4 className="h4MyData">
          <FontAwesomeIcon icon={faUser} />
        </h4>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Row>
          <Col lg="2" className="ColMyData">
            <img src={ME} className="logoImgMyData" />
          </Col>
          <Col lg="9">
            <Modal.Header closeButton>
              <Modal.Title>Mohammed Ali Mohammed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li>Job: Communications Engineer</li>
                <li>Age: 23 years old</li>
                <li>Country: Egypt</li>
                <li>City: Cairo</li>
                <li>Area: Al-Ahram Gardens</li>
                <li>Gate: 4th Gate</li>
              </ul>
            </Modal.Body>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default MyData;
