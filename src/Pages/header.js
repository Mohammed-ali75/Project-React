import React from "react";
import MyData from "./myData";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <>
      <Navbar expand="lg" className="navHeader">
        <Navbar.Brand>
          <h2 className="logoText">CV</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link
              className="aHeader"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              <h4>Home</h4>
            </Link>
            <Link
              className="aHeader"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={250}
            >
              <h4>Skills</h4>
            </Link>
            <Link
              className="aHeader"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}
            >
              <h4>Projects</h4>
            </Link>
            <div>
              <Nav.Link
                className="circleHeader"
                target="_blank"
                href="https://github.com/Mohammed-ali75"
              >
                <h4>
                  <FontAwesomeIcon icon={faGithub} />
                </h4>
              </Nav.Link>
              <Nav.Link className="circleHeader">
                <h4>
                  <FontAwesomeIcon icon={faFacebookF} />
                </h4>
              </Nav.Link>
              <Nav.Link className="circleHeader">
                <h4>
                  <FontAwesomeIcon icon={faInstagram} />
                </h4>
              </Nav.Link>
              <MyData />
              <Link
                to="Data"
                spy={true}
                smooth={true}
                offset={-60}
                duration={250}
                className="squareHeader aHeader"
              >
                <h4>let's connect</h4>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
