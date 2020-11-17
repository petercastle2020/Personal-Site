import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/Header.css';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';





function Header() {
    return (
    <div className="nav-bar-div">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><ScatterPlotIcon style={{ fontSize: 60}} /></Navbar.Brand>
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