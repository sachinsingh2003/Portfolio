import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an Embedded Engineer who enjoys turning ideas into reliable, efficient real-time systems.Through hands-on projects, I’ve explored low-level programming and microcontroller-based design, and discovered a strong interest in building performance-driven, hardware-aware solutions with clean and maintainable code.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C, C++, Embedded C, Linux, Communication Protocols, Microcontroller(LPC2129,ESP32, Arduino Uno), Communication Protocols(UART, SPI, I2C and CAN){" "}
                </b>
              </i>
              — and I enjoy working across both software and hardware.
              <br />
              <br />
              {/* My key areas of interest include developing */}
              <i>
                <b className="purple">
                  {" "}
                  {/* Web Applications, Blockchain Solutions,{" "} */}
                </b>
              </i>
              {/* and exploring new ways to bridge on-chain and off-chain systems. */}
              <br />
              <br />
              {/* Whenever possible, I love building projects with */}
              {/* <b className="purple"> Node.js </b> and modern frameworks like{" "} */}
              <i>
                {/* <b className="purple">React.js</b> and{" "} */}
                {/* <b className="purple">Next.js</b>. */}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
