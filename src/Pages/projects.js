import React from "react";
import { Link } from "react-scroll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Projects = () => {
  return (
    <div className="divProjects">
      <Container>
        <Row>
          <Col lg="3" className="ProjectsImg1">
            <div>
              <Nav.Link
                href="https://mohammed-ali75.github.io/Project_HTML-CSS/"
                target="_blank"
              >
                Project HTML&CSS
              </Nav.Link>
            </div>
          </Col>
          <Col lg="3" className="ProjectsImg2">
            <div>
              <Nav.Link
                href="https://mohammed-ali75.github.io/Project_HTML5-CSS3/"
                target="_blank"
              >
                Project HTML5&CSS3
              </Nav.Link>
            </div>
          </Col>
          <Col lg="3" className="ProjectsImg3">
            <div>
              <Nav.Link
                href="https://mohammed-ali75.github.io/Project_Bootstrap/"
                target="_blank"
              >
                Project Bootstrap
              </Nav.Link>
            </div>
          </Col>
          <Col lg="3" className="ProjectsImg4">
            <div>
              <Nav.Link
                href="https://mohammed-ali75.github.io/Project_Java-Script/"
                target="_blank"
              >
                Project Java Script
              </Nav.Link>
            </div>
          </Col>
          <Col lg="3" className="ProjectsImg5">
            <div>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={250}
              >
                Project React
              </Link>
            </div>
          </Col>
          <Col lg="3" className="ProjectsImg6">
            <div>
              <Nav.Link
                href="https://drive.google.com/file/d/1-GJUaitJ2vujV__DKfrx-yoimWpODkDF/view"
                target="_blank"
              >
                FrontEnd Developer certificate
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
