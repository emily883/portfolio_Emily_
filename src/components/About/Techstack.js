import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiSqlite
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>NodeJs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>ReactJs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>MongoDb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>NextJs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>FireBase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>SQLite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>CSS3</div>
      </Col>
    </Row>
  );
}

export default Techstack;
