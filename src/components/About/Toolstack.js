import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiFigma
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>VisualStudio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>PostMan</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <div style={{fontSize: "15px", paddingBotton: "0px"}}>Figma</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
