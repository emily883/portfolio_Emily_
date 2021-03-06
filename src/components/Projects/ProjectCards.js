import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <div className="Buttons-project-Container">
        <Button variant="primary" href={props.repositoryLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Repository"}
        </Button>
        {props.live ? (
          <Button variant="third" href={props.Livelink} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"View Project"}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
export default ProjectCards;
