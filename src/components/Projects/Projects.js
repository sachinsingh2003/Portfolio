import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iot from "../../Assets/Project/iot.png";
import resume from "../../Assets/Project/resume.png";
import rfid from "../../Assets/Project/rfid.jfif";
import CAN from "../../Assets/Project/CAN.jpg";
import database from "../../Assets/Project/database.jfif";
import uart from "../../Assets/Project/uart.jfif";
import gesture from "../../Assets/Project/gesture.png"
import preprocessor from "../../Assets/Project/preprocessor.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        {/* ================= MAJOR PROJECTS ================= */}

        <h2 className="purple" style={{ marginTop: "40px" }}>
          Major Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Smart Home Automation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Smart Home Automation using IoT"
              description="Developed an IoT-based smart home system using Arduino Uno to control home appliances remotely. Implemented communication using TCP/IP and integrated sensors and relays for real-time device control."
              ghLink="https://github.com/sachinsingh2003/IOT_Home_Automation"
           />
          </Col>

          {/* Resume Builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder Web Application"
              description="Designed and developed a dynamic resume builder web application using HTML, CSS, PHP, and MySQL where users can create, edit, preview, and download resumes."
              ghLink="https://github.com/sachinsingh2003/Resume-Builder-Web-Applicartion"
           />
          </Col>

          {/* RFID Attendance */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rfid}
              isBlog={false}
              title="Smart Attendance System using RFID"
              description="Built an RFID-based attendance system using ESP32. Implemented SPI communication with RFID module and logged attendance data to Google Sheets via WiFi."
              ghLink="https://github.com/sachinsingh2003/Smart-Attendance-System-using-RFID"
            />
          </Col>

          {/* CAN Protocol */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CAN}
              isBlog={false}
              title="Automotive ECU Communication Framework Using CAN Protocol"
              description="Built a CAN bus communication system using LPC2129 microcontrollers where two nodes exchange real-time data to control vehicle indicators, headlights, and speed monitoring using ADC, with output displayed on LCD."
              ghLink="https://github.com/sachinsingh2003/ECU-Communication-Using-CAN-Protocol"

            />
          </Col>

          {/* “Real-Time Hand Gesture Controlled Embedded Lighting System” */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesture}
              isBlog={false}
              title="Real-Time Hand Gesture Controlled Embedded Lighting System"
              description="This project uses computer vision to control LEDs using hand gestures. A webcam captures the hand movement, and a Python program detects the number of fingers using a hand tracking model. The detected gesture is sent through serial communication to a microcontroller (Arduino/LPC2129), which controls multiple LEDs accordingly. The system demonstrates a simple touchless human–machine interaction using hand gestures."
              ghLink="https://github.com/sachinsingh2003/Real-Time-Hand-Gesture-Controlled-Embedded-Lighting-System"
            />
          </Col>

        </Row>


        {/* ================= MINOR PROJECTS ================= */}

        <h2 className="purple" style={{ marginTop: "40px" }}>
          Minor Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Database Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Student Database Management System"
              description="Built a menu-driven student record management system in C supporting operations like insert, update, delete, sort, and reverse using structures and file handling for persistent data storage."
              ghLink="https://github.com/sachinsingh2003/Student-Database-Management-System"
            />
          </Col>


          {/* uart based led control */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uart}
              isBlog={false}
              title="Bluetooth-Based LED Control using UART Protocol "
              description="Implemented a Bluetooth-based LED control system using the HC-05 module and LPC2129 microcontroller with UART communication for command-based wireless LED operation."
            />
          </Col>

           {/* mini preprocessore */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={preprocessor}
              isBlog={false}
              title="Mini Preprocessor "
              description="A Mini C Preprocessor implemented in C that performs basic preprocessing tasks such as removing comments, expanding header files, and replacing macros. The program processes a C source file step-by-step and generates a preprocessed output file similar to a compiler’s .i file."
              ghLink="https://github.com/sachinsingh2003/Mini-Preprocessor"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;