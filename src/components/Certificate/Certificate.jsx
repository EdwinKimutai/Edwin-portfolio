import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import frontend from '../../Assets/Projects/frontend.png';
import Introduction_of_python from '../../Assets/Projects/introduction_of_pyhon.png';
import webDeign from '../../Assets/Projects/webDeign.png';
import IntroductionOfPython from '../../Assets/Projects/introductionOfPython.png';

const Certificate = () => {
  const certificateData = [
    {
      name: "Frontend Developers",
      issuedBy: "Great Learning",
      date: "Jun 2024",
      credentialId: "https://olympus.mygreatlearning.com/courses/12761/certificate",
      description: "In addition to HTML, CSS, and JavaScript, frontend developers often work with various frontend frameworks and libraries such as Bootstrap, streamline the development process and build more complex and scalable applications.",
      image:frontend // Add image URL here
    },
    {
        name: "Great Learning",
        issuedBy: "Introduction to Web Design",
        date: "Jun 2024",
        credentialId: "https://olympus.mygreatlearning.com/courses/91537/certificate",
        description: "Whether you're a complete beginner or an experienced professional looking to enhance your skills, our Web Design Certificate course will empower you to embark on a successful career in web design or take your existing career to new heights.",
        image: webDeign // Add image URL here
      },
      {
        name: "Python and Artificial Intelligence",
        issuedBy: "AWS",
        date: "May 2024",
        credentialId: "https://www.cert.devtown.in/verify/sHJmh",
        description: " I have earned a certification in Python and Artificial Intelligence from AWS Community builders! This comprehensive program has equipped me with the skills and knowledge necessary to excel in the ever-evolving field of AI and data science. 🎓✨",
         image:IntroductionOfPython  // Add image URL here
      },
    // Add more certificate data here
    {
        name: "Python and Artificial Intelligence",
        issuedBy: "Devtown and collaboration for AWS and GDSC university",
        date: "May 2024",
        credentialId: "https://www.cert.devtown.in/verify/OT1iH",
        description: "I have earned a certification in Python and Artificial Intelligence from Devtown! and collaboration for AWS and GDSC university. This comprehensive program has equipped me with the skills and knowledge necessary to excel in the ever-evolving field of AI and data science.",
        image:Introduction_of_python // Add image URL here
      },
  ];

  return (
    <Container className="mt-5 py-5 ">
      <h2 style={{ color: "white", height: 90 }}>Certifications</h2>
      <Row>
        {certificateData.map((cert, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <a href={cert.credentialId} target="_blank" rel="noopener noreferrer"> {/* Make image a clickable link */}
                <Card.Img variant="top" src={cert.image} alt={cert.name} style={{ height: '200px', objectFit: 'cover' }} /> {/* Added image */}
              </a>
              <Card.Body className="p-4">
                <Card.Title className="mb-3" style={{ fontSize: '1.5rem' }}>{cert.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1.1rem' }}>{cert.issuedBy}</Card.Subtitle>
                <Card.Text className="mb-3">{cert.description}</Card.Text>
                <Card.Text className="mb-3">
                  <strong>Date:</strong> {cert.date}
                </Card.Text>
                <Card.Link href={cert.credentialId} target="_blank" className="btn btn-outline-primary">View Credential</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificate;
