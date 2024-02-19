import React from "react";
import ConsoleText from "./words";
import { Link } from "react-scroll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Cuate from "../img/Programmer-cuate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
function introduction() {
  const words = [
    "FrontEnd Developer",
    "FullStack Web Developer",
    "BackEnd Developer",
  ];
  const colors = ["#fff"];
  return (
    <>
      <Row className="rowIntroduction" id="Home">
        <Col className="col1Introduction" lg="6">
          <span className="spanIntroduction">welcome all in my portfolio</span>
          <h1 className="h1Introduction">
            Hello! I'm Mohammed Ali Mohammed,
            <p className="pIntroduction">
              <ConsoleText words={words} id="text" colors={colors} />
            </p>
          </h1>
          <h5 className="h5Introduction">
            hello everyone, I have 2 years of experience in web development
          </h5>
          <Link
            className="btnIntroduction"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-60}
            duration={250}
          >
            let's connect <FontAwesomeIcon icon={faCircleRight} />
          </Link>
        </Col>
        <Col className="col2Introduction" lg="6">
          <img src={Cuate} className="ImgIntroduction" />
        </Col>
      </Row>
    </>
  );
}

export default introduction;
