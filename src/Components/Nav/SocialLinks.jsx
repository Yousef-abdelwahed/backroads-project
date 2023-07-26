import React from "react";
import Nav from "react-bootstrap/Nav";

const SocialLinks = ({ icon, href }) => {
  return (
    <Nav.Link href={href} target="_blank">
      <i className={icon}></i>
    </Nav.Link>
  );
};

export default SocialLinks;
