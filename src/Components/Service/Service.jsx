import React from "react";
import Title from "../Title/Title";
import "./service.css";
import { Container, Row } from "react-bootstrap";
import { services } from "../../data/data";
import Servicepage from "./Servicepage";

const Service = () => {
  return (
    <section id="services">
      <Container className="section-center m-auto">
        <Title title={"our"} subTitle={"service"} />
        <Row className="section-center m-auto align-items-center">
          {services.map((service) => {
            return <Servicepage {...service} key={service.id} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
