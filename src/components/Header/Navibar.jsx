import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navibar = () => {
  return (
    <div>
      {/* <Navbar variant="dark" bg="dark" fixed='top' className="Navbg">
    <Navbar.Brand className="navbd" href="#home">Sri Tech Solutions</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="lef" activeKey="#home">
      <Nav.Link className="lefs" href="#home">Home</Nav.Link>
      <Nav.Link className="lefs" href="#about">About us</Nav.Link>
      <Nav.Link className="lefs" href="#Services">Services</Nav.Link>
      <Nav.Link className="lefs" href="#pricing">Pricings</Nav.Link>   
      <Nav.Link className="lefs" href="#contact">Contact us</Nav.Link>   
    </Nav>
    </Navbar.Collapse>
  </Navbar> */}

      <Navbar variant="dark" fixed="top" bg="dark" expand="lg">
        <Navbar.Brand id="navbd" href="/">
          Logo&Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="lef">
            <Nav.Link activeclassname="active" className="lefs" href="#home">
              Services
            </Nav.Link>
            <Nav.Link className="lefs" href="#about">
              Pricings
            </Nav.Link>
            <Nav.Link className="lefs" href="#services">
              Contact Us
            </Nav.Link>
            <Nav.Link className="lefs" href="#pricing">
              LOGIN
            </Nav.Link>
            <Nav.Link className="lefs" href="#contact">
              SIGN UP
            </Nav.Link>
            {/* <Nav.Link
              className="lefsblog"
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLogs
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navibar;
