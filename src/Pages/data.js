import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Cuate from "../img/Cross-platform software-pana.png";
import InputGroup from "react-bootstrap/InputGroup";

function data() {
  return (
    <>
      <Row className="rowData" id="Data">
        <Col lg="5" className="col1Data">
          <img src={Cuate} className="ImgData" />
        </Col>
        <Col lg="7" className="col2Data">
          <h2 className="h2Data">get in touch</h2>
          <Row className="rowRowData">
            <Col lg="6">
              <Form.Control type="text" placeholder="The name is triple" />
            </Col>
            <Col lg="6">
              <Form.Control type="text" placeholder="Company name" />
            </Col>
            <Col lg="6">
              <InputGroup>
                <Form.Control placeholder="Name gmail" />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col lg="6">
              <Form.Control type="text" placeholder="Phone No." />
            </Col>
            <Col lg="12"><Form.Control type="text" placeholder="Message" /></Col>
          </Row>
          <button className="btnData">send</button>
        </Col>
      </Row>
    </>
  );
}

export default data;
