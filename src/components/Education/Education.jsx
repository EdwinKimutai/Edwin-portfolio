import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      institution: "Chhattisgarh madhyamik shiksha mandal (CGBSE)",
      degree: "10th",
      year: "2018",
      description: "I Completed My 10th from Rajiv Gandhi School. ",
      Cgpa:"5.8"
    },
    {
      institution: "Chhattisgarh madhyamik shiksha mandal (CGBSE)",
      degree: "12th",
      year: "2020",
      description: " I Completed My 12th From Rajiv Gandhi School.",
      Cgpa:"9.3"
    },
    {
      institution: "Shri Shankarachary instiute Of Professional Technology",
      degree: "Bachelor Of Technology",
      year: "2022 - 2026",
      description: "Comouter Science And Information Technology Engineering.",
      Cgpa:"6.9"
    }
  ];

  return (
    <Container className="mt-5 py-5">
      <h2 style={{color:"white",height:90,}}>Education</h2>
      <Row>
        {educationData.map((edu, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                <Card.Text>{edu.description}</Card.Text>
                <Card.Text>
                  <strong>Year:</strong> {edu.year}
                </Card.Text>
                <Card.Text>
                  <strong>CGPA:</strong> {edu.Cgpa}
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