import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import move from "../../Assets/Projects/move.png";
import event from "../../Assets/Projects/event.png";
import resturornt from "../../Assets/Projects/resturornt.png";
import job from "../../Assets/Projects/job.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resturornt}
              isBlog={false}
              title="Resturent"
              description="This project aims to showcase your front-end development skills through the creation of a visually appealing and highly functional website for a fictional restaurant. The website will blend aesthetics with functionality, providing an engaging user experience through modern design and interactive elements.
              Technologies Used
              HTML5: For structuring the content and layout of the website.
              CSS3: For styling the website, including layout, colors, typography, and responsive design.
              JavaScript: For adding interactivity, such as form validation, image sliders, and dynamic content updates."
              ghLink="https://github.com/Aayushajs/Resturent-Project"
              demoLink="https://resturaltresturent-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={move}
              isBlog={false}
              title="Move-App"
              description="Relocating can be a complex and stressful experience, but with Move, your all-in-one moving app, the entire process is simplified and organized. Whether you’re moving across town or across the country, Move is designed to manage every aspect of your move efficiently and effectively"
              ghLink="https://github.com/Aayushajs/MOVE-APP"
              demoLink="https://moveapp20.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job-Search"
              description="Job Search Website. Built with Vite, React, Redux, Node.js, Express, MongoDB. Features: User Auth, Job Listings, Company Profiles, User Profiles, Real-time Notifications, Admin Dashboard. Technical Highlights: Vite, React, Redux, Node.js, Express, MongoDB. Benefits: Scalable, Fast, Secure, Easy Job Search."
              ghLink="https://github.com/Aayushajs/JOB-SEARCH"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event-Organization"
              description="This project will highlight your front-end development skills by building a comprehensive platform for managing and promoting events
                Technologies Used
                HTML5: To structure the website content.
                CSS3: To style the website, including layout, colors, typography, and responsive design.
                JavaScript: To add interactive features, such as form validation, dynamic content updates, and image sliders."
              ghLink="https://github.com/Aayushajs/Event-Organization"
              demoLink="https://event-organization.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
