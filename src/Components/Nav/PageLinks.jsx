import React from "react";
import Nav from "react-bootstrap/Nav";

const PageLinks = ({ href, text, itemClass }) => {
  return (
    <Nav.Link href={href} className={itemClass}>
      {text}
    </Nav.Link>
  );
};

export default PageLinks;
