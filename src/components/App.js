import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

import Profile from '../containers/Profile';
import SliderComponent from '../containers/Slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTab: 'slider' }
    }

    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" onClick={() => this.setState({currentTab:'slider'})}>My Github Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto" >
                            <Nav.Link href="#Slider" onClick={() => this.setState({currentTab:'slider'})}>Slider</Nav.Link>
                            <Nav.Link href="#Profile" onClick={() => this.setState({currentTab:'profile'})}>Profile</Nav.Link>
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
