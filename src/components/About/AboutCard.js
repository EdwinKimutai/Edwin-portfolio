import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayush Jain </span>
            from <span className="purple">Chhattisgarh, India.</span>
            <br />
            I'm 3rd-year engineering student and full-stack web developer with a passion for building responsive and scalable web applications.
            <br />
            Currently in the early stages of learning machine learning, actively building and expanding skills in this evolving field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> "I'm always explore and learn about the latest technologies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing  
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aayush Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
