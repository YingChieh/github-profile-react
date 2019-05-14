import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from "react-bootstrap";

function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">My Github Profile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Slider</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default App;
