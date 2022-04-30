import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emily Cruz </span>
            from <span className="purple"> Puerto Rico</span>
            <br />I am a junior Web developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read books
            </li>
            <li className="about-activity">
              <ImPointRight /> Study
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "knowledge is power..."{" "}
          </p>
          <footer className="blockquote-footer">Francis Bacon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
