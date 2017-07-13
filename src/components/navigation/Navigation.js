import React, { Component } from 'react';
import './Navigation.css';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
   <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">My Travelsite</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Stuff</NavItem>
        <NavItem eventKey={4} href="#">Contact</NavItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
