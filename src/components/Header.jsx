import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {WorkflowIcon, SearchIcon} from '@primer/octicons-react'





function Header() {
    return (
    <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><WorkflowIcon size={40} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
            <Button variant="outline-light"><SearchIcon size={20} /></Button>
          </Form>
        </Navbar>
        <br />
    </>)
}

export default Header;