import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const NavC = () => {
  return (
    <StyledNav>
      <Navbar
        className="navEdit"
        collapseOnSelect
        expand="sm"
        // bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="brand" href="#home">
          <Link to="/"> Sweep </Link>
          <FontAwesomeIcon className="sweepIcon" icon={faFilm} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="p">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="p">
              <Link to="/search">Search</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  .navEdit {
    background: #0202a7;
    .brand {
      font-size: 2rem;
      transition: all ease 0.5s;
      &:hover {
        color: #c07d00;
      }
      .sweepIcon {
        color: #c07d00;
      }
    }
    .ml-auto {
      font-size: 2rem;
      .p {
        color: white;
        margin: 0rem 2rem;
      }
    }
  }
`;

export default NavC;
