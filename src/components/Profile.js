import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            editing: false
        }
    }

    componentDidMount() {
        this.props.fetchProfile();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({userInfo : nextProps.profile})
    }

    updateValue(type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo:userInfoCopy});
        }

    render() {
        return (
            <div className="container">
                <Button bsstyle="primary" onClick={() => this.setState({ editing: !this.state.editing })}>Edit</Button>
                <hr />
                {
                    this.state.editing ?
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.userInfo.name}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'name')}
                                />
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.userInfo.blog}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'blog')}
                                />
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.userInfo.email}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'email')}
                                />
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.userInfo.location}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'location')}
                                />
                            </Form.Group>
                        </Form>
                        :
                        <div>
                            <p><strong>Name: </strong>{this.state.userInfo.name}</p>
                            <p><strong>LinkedIn: </strong>{this.state.userInfo.blog}</p>
                            <p><strong>Email: </strong>{this.state.userInfo.email}</p>
                            <p><strong>Location: </strong>{this.state.userInfo.location}</p>
                        </div>
                }
            </div>
        );
    }
}

export default Profile;