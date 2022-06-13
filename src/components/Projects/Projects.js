import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imageWeatherApp from "../../Assets/WeatherAppImage.jpg";
import ImageUploaderImage from "../../Assets/ImageUploaderImage.jpg";

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
              live={false}
              repositoryLink="https://github.com/emily883/PI-Dogs-FT__13__"
              Livelink
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                imageWeatherApp
              }
              title="Weather Report App"
              description="A weather application where you can see the current temperature as well as a representative image of the current weather, and in addition the approximate temperature and weather for the next two days. | Made with Flask, Html5 and Css3"
              live={true}
              repositoryLink="https://github.com/emily883/weatherpandappV.2"
              Livelink="https://weatherpandaapp.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                ImageUploaderImage
              }
              title="Image Uploader & Share"
              description="Web page where you can upload a photo to the server and share it with your friends and family through a link given when you finish uploading your image. | Made using React, NodeJs, ExpressJs, CSS3 Modules"
              live={true}
              repositoryLink="https://github.com/emily883/ImageUploader"
              Livelink="https://imageuploaderclient.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
