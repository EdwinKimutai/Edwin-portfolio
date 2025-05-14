import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import frontend from "../../Assets/Projects/frontend.png";

const Certificate = () => {
  const certificateData = [
    {
      name: "Computer Science",
      issuedBy: "Great Learning",
      date: "Jun 2026 (Expected)",

      description:
        "This certificate is awarded to Edwin Kimutai for successfully completing the course Computer Science.",
      image: frontend, // Add image URL here
    },
  ];

  return (
    <Container className="mt-5 py-5 ">
      <h2 style={{ color: "black", height: 90 }}>Certifications</h2>
      <Row>
        {certificateData.map((cert, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card
              className="shadow-sm"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <a
                href={cert.credentialId}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {/* Make image a clickable link */}
                <Card.Img
                  variant="top"
                  alt={cert.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                {/* Added image */}
              </a>
              <Card.Body className="p-4">
                <Card.Title className="mb-3" style={{ fontSize: "1.5rem" }}>
                  {cert.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  {cert.issuedBy}
                </Card.Subtitle>
                <Card.Text className="mb-3">{cert.description}</Card.Text>
                <Card.Text className="mb-3">
                  <strong>Date:</strong> {cert.date}
                </Card.Text>
                <Card.Link target="_blank" className="btn btn-outline-primary">
                  View Credential
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificate;
