import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/image/logo.svg";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../../data/data";
const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Tours">Tours</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {socialLinks.map((link) => {
              return <SocialLinks {...link} key={link.id} itemClass="icons" />;
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
