import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: this.props.profile,
            editing: false,
            error: false
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ userInfo: nextProps.profile })
    }

    updateValue(type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({ userInfo: userInfoCopy });
    }

    saveProfile() {
        var error = false;
        var propertiesToCheck = ['name', 'blog', 'email', 'location'];

        propertiesToCheck.forEach(function (term) {
            if (this.state.userInfo[term] === '') {
                error = true;
            }
        }.bind(this));

        if (!error) {
            // save profile
            this.props.saveProfile(this.state.userInfo);
            this.setState({ editing: !this.state.editing });
        }
        this.setState({ error });
    }

    render() {
        return (
            <div className="container">
                <br/>
                <Button variant="primary" onClick={() => this.setState({ editing: !this.state.editing })}>
                    {this.state.editing ? 'Cancel' : 'Edit'}
                </Button>
                <hr />
                {
                    this.state.editing ?
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={this.state.error && this.state.userInfo.name === '' ? 'red-border' : ''}
                                    value={this.state.userInfo.name}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'name')}
                                />
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={this.state.error && this.state.userInfo.blog === '' ? 'red-border' : ''}
                                    value={this.state.userInfo.blog}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'blog')}
                                />
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={this.state.error && this.state.userInfo.email === '' ? 'red-border' : ''}
                                    value={this.state.userInfo.email}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'email')}
                                />
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={this.state.error && this.state.userInfo.location === '' ? 'red-border' : ''}
                                    value={this.state.userInfo.location}
                                    placeholder="Enter text"
                                    onChange={this.updateValue.bind(this, 'location')}
                                />
                                <Button variant="info" onClick={this.saveProfile.bind(this)}>Save</Button>

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