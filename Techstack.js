import React from "react";
import { Col, Row } from "react-bootstrap";

import C from "../../Assets/TechIcons/C++.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import HTML from "../../Assets/TechIcons/html.png";
import CSS from "../../Assets/TechIcons/css.png";
import MySQL from "../../Assets/TechIcons/SQL.svg";
import PHP from "../../Assets/TechIcons/php.png";

import Arduino from "../../Assets/TechIcons/Arduino.png";
import ESP32 from "../../Assets/TechIcons/esp.png";
import STM32 from "../../Assets/TechIcons/STM32.svg";
import Chip from "../../Assets/TechIcons/Microcontroller.svg";

function Techstack() {
  return (
    <>
      {/* ================= Embedded & Hardware ================= */}
      <h3 className="techstack-heading">Embedded & Hardware</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={C} alt="C / Embedded C" />
          <div className="tech-icons-text">C / Embedded C</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Chip} alt="LPC2129" />
          <div className="tech-icons-text">LPC2129</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Arduino} alt="Arduino" />
          <div className="tech-icons-text">Arduino</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={ESP32} alt="ESP32" />
          <div className="tech-icons-text">ESP32</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={STM32} alt="STM32" />
          <div className="tech-icons-text">STM32</div>
        </Col>
      </Row>

      {/* ================= Communication Protocols ================= */}
      <h3 className="techstack-heading">Communication Protocols</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        {["UART", "SPI", "I2C", "CAN", "TCP/IP"].map((tech, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <div className="tech-protocol">{tech}</div>
          </Col>
        ))}
      </Row>

      {/* ================= Software & Programming ================= */}
      <h3 className="techstack-heading">Programming & Software</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={HTML} alt="HTML" />
          <div className="tech-icons-text">HTML</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={CSS} alt="CSS" />
          <div className="tech-icons-text">CSS</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={MySQL} alt="MySQL" />
          <div className="tech-icons-text">MySQL</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={PHP} alt="PHP" />
          <div className="tech-icons-text">PHP</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
