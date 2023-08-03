import React from "react";
import "./about.css";
import Title from "../Title/Title";
//image
import about from "../../assets/images/image/about.jpeg";

import { Button, Col, Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className=" justify-content-center ">
          <Col md={12}>
            <Title
              itmeClass={"title-section "}
              title={"about"}
              subTitle={"us"}
            />
          </Col>
          <Col md={12} lg={6} className="about-img">
            <img
              className="about-photo"
              src={about}
              alt="about"
              style={{ width: "100%" }}
            ></img>
          </Col>

          <Col md={12} lg={6}>
            <article className="about-info ">
              <h3>explore the difference</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <Button className="btn">read more</Button>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
