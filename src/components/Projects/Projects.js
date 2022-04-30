import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
                <p style={{ color: "white" }}>
          Here are a project I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://raw.githubusercontent.com/emily883/PI-Dogs-FT__13__/main/img/homePage.jpg"}
              isBlog={false}
              title="Dog App"
              description="Application for dog lovers, where they can see & create a breed and see additional information such as a range of weight and height with their respective temperaments without forgetting a respective image showing how the breed of the dog."
              link="https://github.com/emily883/PI-Dogs-FT__13__"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
