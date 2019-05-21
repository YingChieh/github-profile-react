import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from "react-bootstrap";

import Profile from '../containers/Profile';
import SliderComponent from '../containers/Slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTab: 'profile' }
    }


    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">My Github Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto" >
                            <Nav.Link href="#" onClick={() => this.setState({currentTab:'slider'})}>Slider</Nav.Link>
                            <Nav.Link href="#" onClick={() => this.setState({currentTab:'profile'})}>Profile</Nav.Link>
                        </Nav>                        
                    </Navbar.Collapse> 
                </Navbar>

                <div>
                    { this.state.currentTab === 'slider' ? <SliderComponent/> : false }
                    { this.state.currentTab === 'profile' ? <Profile/> : false }

                </div>
            </div>            
        );
    }
}
            
export default App;
