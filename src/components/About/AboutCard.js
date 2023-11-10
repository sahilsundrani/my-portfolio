import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aashutosh Agrawal </span>
            from <span className="purple"> Rewa, Madhya Pradesh.</span>
            <br /> I am a Pre-final year student pursuing B-Tech from VIT Bhopal University (which is not in Bhopal 🙂).
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to play Cricket as well
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Piano / Guitar
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
