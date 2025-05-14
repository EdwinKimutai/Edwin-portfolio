import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I was 16 years old. I have a
              passion for solving problems and building products that make a
              difference in people's lives.
              <br />
              <br />I am conversant in classics like
              <i>
                <b className="purple"> C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies, Products </b>
              </i>
              <br />
              <br />I apply my passion for building products using
              <b className="purple">
                {" "}
                NoSQLs like firebase and Javascript frameworks like
                <i>
                  <b className="purple"> React.js and React Native</b>
                </i>
                &nbsp;
              </b>{" "}
              frameworks like
              <i>
                <b className="purple"> React.js and React Native</b>
              </i>
              &nbsp;
              <i>
                <b className="purple"> </b> whenever possible.
              </i>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Link
                  to="/about" // Navigate to the About page
                  className="btn btn-outline-primary"
                  style={{
                    fontSize: "1.2em",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </p>
            {/* Learn More Button */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={homeLogo}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EdwinKimutai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edwin-kimutai-023477364/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
