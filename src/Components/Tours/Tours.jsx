import React from "react";
import "./Tours.css";
import Tour from "./Tour";
import { tours } from "../../data/data";
import Title from "../Title/Title";
import { Container, Row } from "react-bootstrap";

const Tours = () => {
  return (
    <section id="tours" className="tours">
      <Title title={"featured"} subTitle={"Tours"} />
      <Container>
        <Row>
          {tours.map((tour) => {
            return <Tour {...tour} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Tours;
