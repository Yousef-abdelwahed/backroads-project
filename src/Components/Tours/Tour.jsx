import React from "react";
import "./Tours.css";
import { Card } from "react-bootstrap";

const Tour = ({ image, data, title, info, location, duration, cost }) => {
  return (
    <Card style={{ width: "25rem" }} className="m-3 b-none">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{info}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="card-footer-info d-flex justify-content-between justify-content-around ">
          <span className="">
            <i class="fa-solid fa-map"></i> {location}
          </span>
          <span>From ${cost}</span>
          <span>{duration} Day</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Tour;
