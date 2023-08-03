import React from "react";
import { Col } from "react-bootstrap";

const Servicepage = ({ icon, title, text }) => {
  return (
    <>
      <Col md={1}>
        <span className="service-icons">
          <li className={icon}></li>
        </span>
      </Col>
      <Col md={3}>
        {/* <span className="service-icons">
          <li className={icon}></li>
        </span>{" "} */}
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text'">{text}</p>
        </div>
      </Col>
    </>
  );
};

export default Servicepage;
