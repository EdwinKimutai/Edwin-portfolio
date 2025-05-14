import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Education = () => {
  const educationData = [
    {
      institution: "Daystar University, Athiriver",
      degree: "Computer Science",
      year: "2022",
      description: "Ongoing. ",
      gpa: "3.9",
    },
  ];

  return (
    <Container className="mt-5 py-5">
      <h2 style={{ color: "white", height: 90 }}>Education</h2>
      <Row>
        {educationData.map((edu, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {edu.institution}
                </Card.Subtitle>
                <Card.Text>{edu.description}</Card.Text>
                <Card.Text>
                  <strong>Year:</strong> {edu.year}
                </Card.Text>

                <Card.Text>
                  <strong>GPA "Expected":</strong> {edu.gpa}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
