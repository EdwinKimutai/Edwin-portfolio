import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Edwin Kimutai </span>
            from <span className="purple">Nairobi, Kenya.</span>
            <br />
            I'm 4rd-year computer science student and full-stack web developer
            with a passion for building responsive and scalable web
            applications.
            <br />
            Currently I'm in the early stages of learning machine learning,
            actively building and expanding skills in this evolving field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I’m always exploring and learning the latest
              technologies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Self improvement
            </li>
            <li className="about-activity">
              <ImPointRight /> Spiritual growth
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <div
            style={{
              marginTop: "10px",
              display: "flex", // Make the div a flex container
              alignItems: "flex-start", // Align items at the start vertically
              justifyContent: "flex-start", // Align items at the start horizontally
              marginBottom: "20px",
            }}
          >
            <Link
              to="/resume" // Navigate to the About page
              className="btn btn-outline-primary"
              style={{
                fontSize: "1.2em",
              }}
            >
              Resume
            </Link>
          </div>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Edwin Kimutai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
