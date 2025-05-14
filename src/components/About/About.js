import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-container">
          <Breadcrumb>
            <Breadcrumb.Item href="#about-card">About Me</Breadcrumb.Item>
            <Breadcrumb.Item href="#skillset">Skillset</Breadcrumb.Item>
            <Breadcrumb.Item href="#tools">Tools</Breadcrumb.Item>
            <Breadcrumb.Item href="#github">GitHub</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            id="about-card"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img sticky-image" // Add a class for sticky behavior
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" id="skillset">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" id="tools">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <div id="github">
          <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
