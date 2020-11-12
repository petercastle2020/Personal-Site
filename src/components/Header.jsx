import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {WorkflowIcon} from '@primer/octicons-react'
import '../components/Header.css';





function Header() {
    return (
    <div className="nav-bar-div">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><WorkflowIcon size={50} /></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#features">Projects</Nav.Link>
          </Nav> 
          <Nav>
          <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          </Navbar>
    </div>
    )
}

export default Header;