import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function end() {
  return (
    <>
      <div className="backEnd">
        <div className="endAll1">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="h2end">
                  see my projects at once & leave here your e-mail addresses
                </h2>
              </Col>
              <Col lg="7">
                <Form.Control type="email" placeholder="Name@gmail.com" />
                <button className="btnEnd">send</button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="endAll2">
          <Row>
            <Col lg="6">
              <h2 className="logoText endText">CV</h2>
            </Col>
            <Col lg="6">
              <div>
                <Row className="rowEnd">
                  <Col className="colEnd">
                    <Nav.Link
                      target="_blank"
                      href="https://github.com/Mohammed-ali75"
                      className="circleHeader circleEnd"
                    >
                      <h4>
                        <FontAwesomeIcon icon={faGithub} />
                      </h4>
                    </Nav.Link>
                  </Col>
                  <Col className="colEnd">
                    <Link href="" className="circleHeader circleEnd circleEndF">
                      <h4>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </h4>
                    </Link>
                  </Col>
                  <Col className="colEnd">
                    <Link href="" className="circleHeader circleEnd circleEndI">
                      <h4>
                        <FontAwesomeIcon icon={faInstagram} />
                      </h4>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <p>
            --Copyrights 2024-- All Rights Reserved here By Mohammed Ali
            Mohammed Ali
          </p>
        </div>
      </div>
    </>
  );
}

export default end;
