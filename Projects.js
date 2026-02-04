import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iot from "../../Assets/Projects/iot.png";
import resume from "../../Assets/Projects/resume.png";
import rfid from "../../Assets/Projects/rfid.jfif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some practical projects I have worked on in Embedded Systems and Web Development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Smart Home Automation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Smart Home Automation using IoT"
              description="Developed an IoT-based smart home system using Arduino Uno to control home appliances remotely. Implemented communication using TCP/IP and integrated sensors and relays for real-time device control and monitoring."
         //     ghLink="https://github.com/your-username/smart-home-iot"
            />
          </Col>

          {/* Resume Builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder Web Application"
              description="Designed and developed a dynamic resume builder web application using HTML, CSS, PHP, and MySQL. The system allows users to create, edit, preview, and download professional resumes through an interactive UI."
         //     ghLink="https://github.com/your-username/resume-builder"
            />
          </Col>

          {/* RFID Attendance */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rfid}
              isBlog={false}
              title="Smart Attendance System using RFID"
              description="Built an RFID-based attendance system using ESP32 microcontroller. Implemented SPI communication to interface the RFID module and logged attendance data efficiently to GoogleSheet using wifi module with real-time validation."
       //       ghLink="https://github.com/your-username/rfid-attendance-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
