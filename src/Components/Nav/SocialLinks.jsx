import React from "react";
import Nav from "react-bootstrap/Nav";

const SocialLinks = ({ icon, href, itemClass }) => {
  return (
    <Nav.Link href={href} target="_blank" className="">
      <i className={icon + " " + itemClass}></i>
    </Nav.Link>
  );
};

export default SocialLinks;
