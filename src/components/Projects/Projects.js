import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imageWeatherApp from "../../Assets/WeatherAppImage.jpg"

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
        <p style={{ color: "white" }}>Here are a project I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://raw.githubusercontent.com/emily883/PI-Dogs-FT__13__/main/img/homePage.jpg"
              }
              title="Dog App"
              description="Application for dog lovers, where they can see & create a breed and see additional information such as a range of weight and height with their respective temperaments without forgetting a respective image showing how the breed of the dog. |
              Made using React & Redux, PostgreSQL, NodeJs, ExpressJs, CSS3 Modules"
              repository={true}
              link="https://github.com/emily883/PI-Dogs-FT__13__"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                imageWeatherApp
              }
              title="Weather Report App"
              description="A weather application where you can see the current temperature as well as a representative image of the current weather, and in addition the approximate temperature and weather for the next two days. | Made with Flask, Html5 and Css3"
              repository={false}
              link="https://weatherpandaapp.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
