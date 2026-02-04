import React from "react";
import { Col, Row } from "react-bootstrap";

import Linux from "../../Assets/TechIcons/linux.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import Keil from "../../Assets/TechIcons/keil.png";
import Proteus from "../../Assets/TechIcons/proteus.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={VSCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Keil} alt="Keil uVision" className="tech-icon-images" />
        <div className="tech-icons-text">Keil µVision</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Proteus} alt="Proteus" className="tech-icon-images" />
        <div className="tech-icons-text">Proteus</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
