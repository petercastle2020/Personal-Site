import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {WorkflowIcon, SearchIcon} from '@primer/octicons-react'
import '../components/Header.css';





function Header() {
    return (
    <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><WorkflowIcon size={40} /></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#features">Features</Nav.Link>
          </Nav> 
          <Nav>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        
        </Navbar>
        <br />
    </>)
}

export default Header;