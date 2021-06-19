import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";

const NavC = () => {
  return (
    <StyledNav>
      <Navbar
        className="navEdit"
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          Sweep <FontAwesomeIcon className="sweepIcon" icon={faBroom} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  .navEdit {
    background: #0202a7;
    .sweepIcon {
      color: #c07d00;
    }
  }
`;

export default NavC;
