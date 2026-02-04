import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sachin Rawat</span>{" "}
            from <span className="purple">Dehradun, India</span>.
            <br />
            I’m currently persuing my training as{" "}
            <span className="purple">Embedded Engineer</span> at{" "}
            <span className="purple">Vector India, Bengaluru</span>.
            <br />I hold an bachelors degree in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Uttaranchal University, Dehradun, India</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is temporary, but the problem you solve leave a lasting mark"{" "}
          </p>
          <footer className="blockquote-footer">Sachin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
