import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="DhobiWala"
              description="DhobiWala is a real-time laundry management system which allow both user and admin to track their laundry requests within the website."
              ghLink="https://github.com/Aashu1303/dhobiwalaproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="AuctionWare"
              description="A biding Application which lists items on a marketplace allowing different users to bid on them."
              ghLink="https://github.com/Aashu1303/auction_flutter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
