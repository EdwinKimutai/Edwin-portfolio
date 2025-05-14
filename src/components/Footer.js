import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Social Platforms Section */}
        <Col md="4" sm="12" className="footer-body">
          <h4 className="footer-heading">Social Platforms</h4>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/EdwinKimutai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/edwin-kimutai-023477364/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Information Section */}
        <Col md="4" sm="12" className="footer-contact">
          <h4 className="footer-heading">Contact Information</h4>
          <ul className="contact-info">
            <li>
              <FaPhoneAlt className="footer-icon" />
              <span>0706410093</span>
            </li>
            <li>
              <FaWhatsapp className="footer-icon" />
              <span>0706410093</span>
            </li>
            <li>
              <HiOutlineMail className="footer-icon" />
              <span>edwinronyx</span>
            </li>
            <li>
              <FiMapPin className="footer-icon" />
              <span>Athiriver</span>
            </li>
          </ul>
        </Col>

        {/* Copyright Section */}
        <Col md="4" sm="12" className="footer-copywright">
          <h4 className="footer-heading">Copyright</h4>
          <h3>© {year} Edwin</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
