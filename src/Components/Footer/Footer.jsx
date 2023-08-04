import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../Nav/SocialLinks";
import { socialLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row className="flex-row text-center align-items-center justify-content-center bg-transp">
          <Col md={12}>
            {socialLinks.map((link) => {
              return (
                <SocialLinks
                  {...link}
                  key={link.id}
                  itemClass="icons-footer mx-2 p-2"
                />
              );
            })}
          </Col>
          <Col md={12} className="">
            <p className="copyright">
              copyright &copy; Backroads travel tours company
              <span id="date">{new Date().getFullYear()}</span>. all rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
