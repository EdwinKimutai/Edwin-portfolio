import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PortFolioWebsite from "../../Assets/Projects/PotFolioWebsitBE.png";
import MobitenantProject from "../../Assets/Projects/Mobitenant.png";
import SheepProject from "../../Assets/Projects/Sheep.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortFolioWebsite}
              isBlog={false}
              title="PORTFOLIO WEBSITE"
              description="This is my Potfolio website designed with figma built with a javascript framework called React. The website is responsive and has a clean and modern design. The website uses  bootstrap for styling. Its a clear depiction of my presentation skills and understanding on the framework and Hosted by netlify"
              ghLink="https://github.com/EdwinKimutai/Edwin-portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MobitenantProject}
              isBlog={false}
              title="MOBITENANT PROJECT"
              description="This project is a React Native application for a rental management system that allows landlords to monitor their rental properties and tenants to manage their rental payments. The app is built using React Native, and Firebase. The app is responsive and has a clean and modern design. The app uses  Firebase for authentication and database."
              ghLink="https://github.com/EdwinKimutai/mobitenantAPPV2.0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SheepProject}
              isBlog={false}
              title="RELIGIOUS PROJECT"
              description="This project is a React native application from the religious (for both the teacher and follower) domain. The app is built using React Native, and Firebase. The app is responsive and has a clean and modern design. The app uses  Firebase for authentication and database. Both application seem to have a similar design for this represent my ability to build reusable components and packages that can be used in different projects."
              ghLink="https://github.com/EdwinKimutai/Sheep"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
