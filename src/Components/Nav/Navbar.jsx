import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";

import logo from "../../assets/images/image/logo.svg";
import SocialLinks from "./SocialLinks";
import { pageLinks, socialLinks } from "../../data/data";
import PageLinks from "./PageLinks";
import { Twirl as Hamburger } from "hamburger-react";

import "./NavBar.css";

const NavBarComponent = () => {
  return (
    <>
      {/* ***************************** */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Row>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav navbarScroll"
              className="menu-burger"
            >
              <Hamburger className="nav-toogle-icon" color="#44E3EE" />
            </Navbar.Toggle>
            <Navbar.Brand href="#home">
              <img src={logo} alt="" />
            </Navbar.Brand>{" "}
          </Row>

          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {pageLinks.map((pageLink) => {
                return (
                  <PageLinks
                    {...pageLink}
                    key={pageLink.id}
                    itemClass="pageLinks"
                  />
                );
              })}
            </Nav>
            <Nav className="ms-auto social-icons">
              {socialLinks.map((link) => {
                return (
                  <SocialLinks {...link} key={link.id} itemClass="icons" />
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
